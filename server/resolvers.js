import { Company, Job } from './db.js';

const rejectIf = (condition) => {
  if (condition) {
    throw new Error('Unauthorized');
  }
};

export const resolvers = {
  Query: {
    company: (_root, { companyId }) => Company.findById(companyId),
    job: (_root, { jobId }) => Job.findById(jobId),
    jobs: () => Job.findAll(),
  },

  Mutation: {
    createJob: (_root, { createJobInput }, { user }) => {
      rejectIf(!user);
      const { companyId } = user;
      return Job.create({ ...createJobInput, companyId });
    },
    deleteJob: async (_root, { jobId }, { user }) => {
      rejectIf(!user);
      const job = await Job.findById(jobId);
      rejectIf(job.companyId !== user.companyId);
      return Job.delete(jobId);
    },
    updateJob: async (_root, { updateJobInput }, { user }) => {
      rejectIf(!user);
      const job = await Job.findById(updateJobInput.id);
      rejectIf(job.companyId !== user.companyId);
      const { companyId } = user;
      return Job.update({ ...updateJobInput, companyId });
    },
  },

  Company: {
    jobs: (company) => Job.findAll((job) => job.companyId === company.id),
  },

  Job: {
    company: (job) => Company.findById(job.companyId),
  },
};
