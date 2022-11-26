import { jobs } from '../fake-data';
import { getJobs } from '../graphql/queries';
import JobList from './JobList';

getJobs();

function JobBoard() {
  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default JobBoard;
