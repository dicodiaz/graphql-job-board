import { gql } from '@apollo/client';

export const CreateJobMutation = gql`
  mutation CreateJobMutation($createJobInput: CreateJobInput!) {
    job: createJob(createJobInput: $createJobInput) {
      id
    }
  }
`;
