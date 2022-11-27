import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getAccessToken } from '../auth';
import { CompanyQuery, CreateJobMutation, JobQuery, JobsQuery } from './operations';

const GRAPHQL_URL = 'http://localhost:9000/graphql';

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const createJob = async (createJobInput) => {
  const variables = { createJobInput };
  const context = {
    headers: { Authorization: `Bearer ${getAccessToken()}` },
  };
  const { data } = await client.mutate({ mutation: CreateJobMutation, variables, context });
  return data.job;
};

export const getCompany = async (companyId) => {
  const variables = { companyId };
  const { data } = await client.query({ query: CompanyQuery, variables });
  return data.company;
};

export const getJob = async (jobId) => {
  const variables = { jobId };
  const { data } = await client.query({ query: JobQuery, variables });
  return data.job;
};

export const getJobs = async () => {
  const { data } = await client.query({ query: JobsQuery });
  return data.jobs;
};
