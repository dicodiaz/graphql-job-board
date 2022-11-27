import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCompany } from '../graphql/queries';
import JobList from './JobList';

const CompanyDetail = () => {
  const [company, setCompany] = useState(null);
  const { companyId } = useParams();

  useEffect(() => {
    getCompany(companyId).then(setCompany);
  }, [companyId]);

  if (!company) return <p>Loading...</p>;

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
