import { useQuery } from '@apollo/client';
import { JobQuery, JobsQuery } from './/operations';

export const useJob = (jobId) => {
  const variables = { jobId };
  const { data, loading, error } = useQuery(JobQuery, { variables });

  return {
    job: data?.job,
    loading,
    error: Boolean(error),
  };
};

export const useJobs = () => {
  const { data, loading, error } = useQuery(JobsQuery, {
    fetchPolicy: 'network-only',
  });

  return {
    jobs: data?.jobs,
    loading,
    error: Boolean(error),
  };
};
