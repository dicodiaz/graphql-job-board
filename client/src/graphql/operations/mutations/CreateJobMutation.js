import { gql } from '@apollo/client';
import { JobDetailFragment } from '../fragments/JobDetail';

export const CreateJobMutation = gql`
  mutation CreateJobMutation($createJobInput: CreateJobInput!) {
    job: createJob(createJobInput: $createJobInput) {
      ...JobDetail
    }
  }

  ${JobDetailFragment}
`;
