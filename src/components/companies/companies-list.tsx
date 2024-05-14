import { getPromotedCompanies } from '@/lib/companies';
import CompanyCard from './company-card';

const CompaniesList = async () => {
  const promotedCompanies = await getPromotedCompanies();

  // TODO: check if we need to show only 3 companies, may be we can create a carousel and show them inside it
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {promotedCompanies
        ?.slice(0, 3)
        ?.map((company, index) => <CompanyCard key={index} {...company} />)}
    </div>
  );
};

export default CompaniesList;
