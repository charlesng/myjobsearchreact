import React, { Component } from 'react';
import JobService from './service/ApiService';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PostJobForm from './view/Form';
import JobTable from './view/JobTable';
import JobContentHeader from './view/JobContentHeader';

class App extends Component {
  state = {
    jobs: []
  };

  constructor(props) {
    super(props);
    this.jobService = new JobService();
  }

  removeJobListener = jobId => {
    this.jobService.deleteJob(jobId)
      .then(() => this.getAllJobs());
  }

  postJobListener = job => {
    this.jobService.createJob(job)
      .then(() => this.getAllJobs());
  }

  componentDidMount() {
    this.getAllJobs();
  }

  getAllJobs() {
    this.jobService.getAllJobs()
      .then(result => {
        this.setState({
          jobs: result.data,
        });
      });
  }

  render() {
    const { jobs } = this.state;

    return (
      <div className="container">
        <JobContentHeader />
        <JobTable
          jobs={jobs}
          removeJobListener={this.removeJobListener}
        />
        <h3>Add New Job</h3>
        <PostJobForm handleSubmit={this.postJobListener} />
      </div>
    );
  }
}


export default App;
