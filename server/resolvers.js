import { Company, Job } from './db.js';

export const resolvers = {
  Query: {
    company: (_root, { companyId }) => Company.findById(companyId),
    job: (_root, { jobId }) => Job.findById(jobId),
    jobs: () => Job.findAll(),
  },

  Job: {
    company: (job) => Company.findById(job.companyId),
  },
};
