export class JobService {
  HOST = "/api";
  async getAllJobs() {
    console.log("Getting all the jobs");
    return fetch(`${this.HOST}/jobs`).then(result => result.json());
  }

  async getJobs(id: any) {
    console.log(`Getting job ${id}`);
    return fetch(`${this.HOST}/jobs/${id}`).then(result => result.json());
  }

  async createJob(job: any) {
    console.log(`Creating job`);
    return fetch(`${this.HOST}/jobs`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(job)
    }).then(result => result.json());
  }

  async updateJob(job: any) {
    console.log(`Updating Job with id ${job.id}`);
    return fetch(`${this.HOST}/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(job)
    }).then(result => result.json());
  }

  async deleteJob(id: any) {
    console.log(`Deleting Job with id ${id}`);
    return fetch(`${this.HOST}/jobs/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(result => result.json());
  }
}
