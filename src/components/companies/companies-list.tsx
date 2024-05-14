'use client';
import { usePromotedCompanies } from '@/hooks/usePromotedCompanies';
import CompanyCard from './company-card';

const CompaniesList = () => {
  const { isLoading, error, data: companies } = usePromotedCompanies();
  console.log(companies);
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {companies
        ?.filter((company, index) => index < 3)
        ?.map((company, index) => <CompanyCard key={index} {...company} />)}
    </div>
  );
};

export default CompaniesList;
