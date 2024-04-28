import CompanyTile from '@/app/companies/_components/company-tile';
import { getPromotedCompanies } from '@/lib/companies';
import Hero from './_components/hero';

export default async function Companies() {
  const companies = await getPromotedCompanies();
  return (
    <div className="flex flex-col gap-4 border border-gray-200 bg-secondary-50 p-4 lg:gap-8 lg:p-8">
      <Hero />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
          {companies.map((company, index) => (
            <CompanyTile key={index} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
}
