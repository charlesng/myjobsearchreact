import React, { useState, Component } from 'react';
import Table from './view/Table';
import Form from './view/Form';
import JobService from './service/ApiService';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
        <h1>My Job Search</h1>
        <p>Add New Job and its company name and description, or remove the job by pressing the delete button</p>
        <Table
          jobs={jobs}
          removeJobListener={this.removeJobListener}
        />
        <h3>Add New</h3>
        <Form handleSubmit={this.postJobListener} />
      </div>
    );
  }
}


export default App;
