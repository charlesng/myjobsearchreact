import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import JobTable from "./view/JobTable";
import JobContentHeader from "./view/Banner";
import { JobService } from "./service/ApiService";

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getAllJobs();
  });

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
