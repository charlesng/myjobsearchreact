import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobTable from './components/JobTable';
import JobContentHeader from './components/Banner';
import { JobService } from './service/ApiService';
import { Job } from './model/Job';

const App = () => {
  const [jobs, setJobs]: [Job[], any] = useState([]);

  useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = () => {
    const jobService = new JobService();
    jobService.getAllJobs().then(result => {
      setJobs(result.data);
    });
  };

  return (
    <div>
      <JobContentHeader />
      <JobTable jobs={jobs} />
    </div>
  );
};

export default App;
