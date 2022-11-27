import { useEffect, useState } from 'react';
import { getJobs } from '../graphql/queries';
import JobList from './JobList';

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getJobs().then(setJobs).catch(setError);
  }, []);

  if (error) return <p>Sorry, something went wrong</p>;

  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
};

export default JobBoard;
