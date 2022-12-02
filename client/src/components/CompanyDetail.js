import { useParams } from 'react-router';
import { useCompany } from '../graphql/hooks';
import JobList from './JobList';

const CompanyDetail = () => {
  const { companyId } = useParams();
  const { company, loading, error } = useCompany(companyId);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Sorry, something went wrong</p>;
  }

  const { name, description, jobs } = company;

  return (
    <div>
      <h1 className="title">{name}</h1>
      <div className="box">{description}</div>
      <h5 className="title is-5">Jobs at {name}</h5>
      <JobList jobs={jobs} />
    </div>
  );
};

export default CompanyDetail;
