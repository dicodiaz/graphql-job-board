import { gql } from '@apollo/client';
import { JobDetailFragment } from '../fragments/JobDetail';

export const JobQuery = gql`
  query JobQuery($jobId: ID!) {
    job(jobId: $jobId) {
      ...JobDetail
    }
  }

  ${JobDetailFragment}
`;
