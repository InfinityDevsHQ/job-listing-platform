import { CompaniesListProps } from '@/types/types';
import CompanyCard from './company-card';

const CompaniesList = async ({ companies }: CompaniesListProps) => {
  return (
    <div className="flex gap-4 lg:flex-col lg:gap-8">
      {companies
        ?.filter((company, index) => index < 4)
        ?.map((company, index) => <CompanyCard key={index} {...company} />)}
    </div>
  );
};

export default CompaniesList;
