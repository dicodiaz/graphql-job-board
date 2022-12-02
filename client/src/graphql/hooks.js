import { useQuery } from '@apollo/client';
import { CompanyQuery, JobQuery, JobsQuery } from './/operations';

export const useCompany = (companyId) => {
  const variables = { companyId };
  const { data, loading, error } = useQuery(CompanyQuery, { variables });

  return {
    company: data?.company,
    loading,
    error: Boolean(error),
  };
};

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
