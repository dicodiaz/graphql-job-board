import { Link } from 'react-router-dom';

const JobItem = ({ job }) => {
  const { id, company, title } = job;

  return (
    <li className="media">
      <div className="media-content">
        <Link to={`/jobs/${id}`}>
          {title}
          {company ? ` at ${company.name}` : ''}
        </Link>
      </div>
    </li>
  );
};

const JobList = ({ jobs }) => (
  <ul className="box">
    {jobs.map((job) => (
      <JobItem key={job.id} job={job} />
    ))}
  </ul>
);

export default JobList;
