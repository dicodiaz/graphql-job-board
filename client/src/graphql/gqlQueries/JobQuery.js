import { gql } from 'graphql-request';

export const JobQuery = gql`
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
