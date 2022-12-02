import { useMutation, useQuery } from '@apollo/client';
import { getAccessToken } from '../auth';
import { CompanyQuery, CreateJobMutation, JobQuery, JobsQuery } from './/operations';

export const useCreateJob = () => {
  const [mutate, { loading, error }] = useMutation(CreateJobMutation);

  const createJob = async ({ title, description }) => {
    const {
      data: {
        job: { id: jobId },
      },
      error,
    } = await mutate({
      variables: { createJobInput: { title, description } },
      context: {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      },
      update: (cache, { data: { job } }) => {
        cache.writeQuery({
          query: JobQuery,
          variables: { jobId: job.id },
          data: { job },
        });
      },
    });
    return { jobId, error };
  };

  return {
    createJob,
    loading,
    error: Boolean(error),
  };
};

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
