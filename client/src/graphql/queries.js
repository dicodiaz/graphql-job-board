import { ApolloClient, InMemoryCache } from '@apollo/client';
import { request } from 'graphql-request';
import { getAccessToken } from '../auth';
import { CompanyQuery, CreateJobMutation, JobQuery, JobsQuery } from './operations';

const GRAPHQL_URL = 'http://localhost:9000/graphql';

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const createJob = async (createJobInput) => {
  const variables = { createJobInput };
  const requestHeaders = {
    Authorization: `Bearer ${getAccessToken()}`,
  };
  const { job } = await request(GRAPHQL_URL, CreateJobMutation, variables, requestHeaders);
  return job;
};

export const getCompany = async (companyId) => {
  const variables = { companyId };
  const { company } = await request(GRAPHQL_URL, CompanyQuery, variables);
  return company;
};

export const getJob = async (jobId) => {
  const variables = { jobId };
  const { job } = await request(GRAPHQL_URL, JobQuery, variables);
  return job;
};

export const getJobs = async () => {
  const {
    data: { jobs },
  } = await client.query({ query: JobsQuery });
  return jobs;
};
