import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCompany } from '../graphql/queries';

const CompanyDetail = () => {
  const [company, setCompany] = useState(null);
  const { companyId } = useParams();

  useEffect(() => {
    getCompany(companyId).then(setCompany);
  }, [companyId]);

  if (!company) return <p>Loading...</p>;

  const { name, description } = company;

  return (
    <div>
      <h1 className="title">{name}</h1>
      <div className="box">{description}</div>
    </div>
  );
};

export default CompanyDetail;
