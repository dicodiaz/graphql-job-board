import { Company, Job } from './db.js';

export const resolvers = {
  Query: {
    company: (_root, { companyId }) => Company.findById(companyId),
    job: (_root, { jobId }) => Job.findById(jobId),
    jobs: () => Job.findAll(),
  },

  Company: {
    jobs: (company) => Job.findAll((job) => job.companyId === company.id),
  },

  Job: {
    company: (job) => Company.findById(job.companyId),
  },
};
