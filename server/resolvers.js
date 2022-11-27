import { Company, Job } from './db.js';

export const resolvers = {
  Query: {
    company: (_root, { companyId }) => Company.findById(companyId),
    job: (_root, { jobId }) => Job.findById(jobId),
    jobs: () => Job.findAll(),
  },

  Mutation: {
    createJob: (_root, { createJobInput }, auth) => {
      if (!auth) {
        throw new Error('Unathorized');
      }
      return Job.create(createJobInput);
    },
    deleteJob: (_root, { jobId }) => Job.delete(jobId),
    updateJob: (_root, { updateJobInput }) => Job.update(updateJobInput),
  },

  Company: {
    jobs: (company) => Job.findAll((job) => job.companyId === company.id),
  },

  Job: {
    company: (job) => Company.findById(job.companyId),
  },
};
