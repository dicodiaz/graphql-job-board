import { gql } from 'graphql-request';

export const CreateJobMutation = gql`
  mutation CreateJobMutation($createJobInput: CreateJobInput) {
    job: createJob(createJobInput: $createJobInput) {
      id
    }
  }
`;
