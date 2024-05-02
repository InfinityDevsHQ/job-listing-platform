import CompanyTile from '@/app/companies/_components/company-tile';
import Hero from '@/components/ui/hero';
import { getPromotedCompanies } from '@/lib/companies';

export default async function Companies() {
  const companies = await getPromotedCompanies();

  return (
    <div className="flex flex-col gap-4 border border-gray-200 bg-primary-50 p-4 lg:gap-8 lg:p-8">
      <Hero
        heading="Explore Companies Offering Job Opportunities"
        desc="Amet nulla dolore ullam quia maxime laboriosam obcaecati nostrum ad aliquam, modi libero voluptatem doloribus voluptatibus!"
      />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {companies.map((company, index) => (
            <CompanyTile key={index} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
}
