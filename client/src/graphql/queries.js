import { request } from 'graphql-request';
import { CompanyQuery, JobQuery, JobsQuery } from './gqlQueries';

const GRAPHQL_URL = 'http://localhost:9000/graphql';

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
  const { jobs } = await request(GRAPHQL_URL, JobsQuery);
  return jobs;
};
