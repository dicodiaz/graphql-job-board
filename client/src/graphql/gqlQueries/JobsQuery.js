import { gql } from 'graphql-request';

export const JobsQuery = gql`
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
