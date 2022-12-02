import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useJob } from '../graphql/hooks';

const JobDetail = () => {
  const { jobId } = useParams();
  const { job, loading, error } = useJob(jobId);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Sorry, something went wrong</p>;
  }

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
