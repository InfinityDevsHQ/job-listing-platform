import { CompaniesListProps } from '@/types/types';
import CompanyCard from './company-card';

const CompaniesList = async ({ companies }: CompaniesListProps) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {companies
        ?.filter((company, index) => index < 3)
        ?.map((company, index) => <CompanyCard key={index} {...company} />)}
    </div>
  );
};

export default CompaniesList;
