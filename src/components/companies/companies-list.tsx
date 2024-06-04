'use client';
import { usePromotedCompanies } from '@/hooks/usePromotedCompanies';
import CompanyCardSkeleton from '../skeleton/company-card-skeleton';
import CompanyCard from './company-card';

const CompaniesList = () => {
  const { isLoading, error, data: promotedCompanies } = usePromotedCompanies();
  if (isLoading) return <CompanyCardSkeleton />;
  return (
    <div className="flex flex-col gap-8">
      {promotedCompanies
        ?.slice(0, 4)
        .map((company, index) => (
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
