import { gql, request } from 'graphql-request';

const GRAPHQL_URL = 'http://localhost:9000/graphql';

export const getJob = async (jobId) => {
  const query = gql`
    query JobQuery($jobId: ID!) {
      job(id: $jobId) {
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
    query {
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
