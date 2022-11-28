import { useQuery } from '@apollo/client';
import { JobsQuery } from '../graphql/operations';
import JobList from './JobList';

const JobBoard = () => {
  const { data, loading, error } = useQuery(JobsQuery, {
    fetchPolicy: 'network-only',
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Sorry, something went wrong.</p>;
  }

  const { jobs } = data;

  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
};

export default JobBoard;
