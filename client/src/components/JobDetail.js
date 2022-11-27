import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getJob } from '../graphql/queries';

const JobDetail = () => {
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const { jobId } = useParams();

  useEffect(() => {
    getJob(jobId).then(setJob).catch(setError);
  }, [jobId]);

  if (error) return <p>Sorry, something went wrong</p>;

  if (!job) return <p>Loading...</p>;

  const { title, description, company } = job;
  const { id: companyId, name: companyName } = company;

  return (
    <div>
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">
        <Link to={`/companies/${companyId}`}>{companyName}</Link>
      </h2>
      <div className="box">{description}</div>
    </div>
  );
};

export default JobDetail;
