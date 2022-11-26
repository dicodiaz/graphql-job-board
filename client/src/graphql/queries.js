import { gql, request } from 'graphql-request';

const GRAPHQL_URL = 'http://localhost:9000/graphql';

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
