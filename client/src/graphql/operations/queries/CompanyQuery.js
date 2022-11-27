import { gql } from '@apollo/client';

export const CompanyQuery = gql`
  query CompanyQuery($companyId: ID!) {
    company(companyId: $companyId) {
      id
      name
      description
      jobs {
        id
        title
      }
    }
  }
`;
