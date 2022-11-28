import { useQuery } from '@apollo/client';
import { JobsQuery } from './/operations';

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
