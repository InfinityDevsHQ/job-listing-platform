'use client';
import { usePromotedCompanies } from '@/hooks/usePromotedCompanies';
import CompanyCard from './company-card';

const CompaniesList = () => {
  const { isLoading, error, data: promotedCompanies } = usePromotedCompanies();
  return (
    // TODO: check if we need to show only 3 companies, may be we can create a carousel and show them inside it
    <div className="flex flex-col gap-8">
      {promotedCompanies?.map((company, index) => (
        <CompanyCard
          key={index}
          name={company.name}
          logo_url={company.logo_url}
          description={company.description || ''}
          id={company.id}
        />
      ))}
    </div>
  );
};

export default CompaniesList;
