import { gql, request } from 'graphql-request';

const GRAPHQL_URL = 'http://localhost:9000/graphql';

export const getCompany = async (companyId) => {
  const query = gql`
    query CompanyQuery($companyId: ID!) {
      company(companyId: $companyId) {
        id
        name
        description
      }
    }
  `;
  const variables = { companyId };
  const { company } = await request(GRAPHQL_URL, query, variables);
  return company;
};

export const getJob = async (jobId) => {
  const query = gql`
    query JobQuery($jobId: ID!) {
      job(jobId: $jobId) {
        id
        title
        description
        company {
          id
          name
        }
      }
    }
  `;
  const variables = { jobId };
  const { job } = await request(GRAPHQL_URL, query, variables);
  return job;
};

export const getJobs = async () => {
  const query = gql`
    query JobsQuery {
      jobs {
        id
        title
        company {
          name
        }
      }
    }
  `;
  const { jobs } = await request(GRAPHQL_URL, query);
  return jobs;
};
