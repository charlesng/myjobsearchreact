import React, { useState, useEffect } from 'react';
import JobService from './service/ApiService';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobTable from './view/JobTable';
import JobContentHeader from './view/Banner';

const App = () => {
  const [jobs] = useState([]);

  useEffect(() => {
    getAllJobs();
  })

  const getAllJobs = () => {
    const jobService = new JobService();
    jobService.getAllJobs()
      .then(result => {
        this.setState({
          jobs: result.data,
        });
      });
  }

  return (
    <div>
      <JobContentHeader />
      <JobTable
        jobs={jobs}
      />
    </div>
  );

}

export default App;