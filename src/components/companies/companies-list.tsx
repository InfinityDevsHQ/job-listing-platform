import { getPromotedCompanies } from '@/lib/compsnies';
import CompanyCard from './company-card';

const CompaniesList = async () => {
  const companies = await getPromotedCompanies();
  return (
    <div className="flex gap-4 lg:flex-col lg:gap-8">
      {companies?.map((company, index) => (
        <CompanyCard
          key={index}
          companyLogo={company.logo_url}
          companyName={company.name}
          companyDescription={company.description}
        />
      ))}
    </div>
  );
};

export default CompaniesList;
