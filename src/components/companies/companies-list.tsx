import CompanyCard from './company-card';

import { CompaniesListProps } from '@/types/types';

const CompaniesList = ({ companies }: CompaniesListProps) => {
  return (
    <div className="flex gap-4 lg:flex-col lg:gap-8">
      {companies?.map((company, index) => (
        <CompanyCard
          key={index}
          companyLogo={company.companyLogo}
          companyName={company.companyName}
          companyDescription={company.companyDescription}
        />
      ))}
    </div>
  );
};

export default CompaniesList;
