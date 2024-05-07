import CompanyTile from '@/app/companies/_components/company-tile';
import Hero from '@/components/ui/hero';
import { getPromotedCompanies } from '@/lib/companies';
import Image from 'next/image';
export default async function Companies() {
  const companies = await getPromotedCompanies();

  return (
    <div className="bg--50 relative flex flex-col gap-4 border border-gray-200 bg-gray-50 p-4 lg:gap-8 lg:p-8">
      <Image
        src={'/assets/companies/white-vector.png'}
        width={1411}
        height={840}
        alt="Vector"
        className="absolute right-0 top-0"
      />
      <Hero
        heading="Explore Companies Offering Job Opportunities"
        desc="Amet nulla dolore ullam quia maxime laboriosam obcaecati nostrum ad aliquam, modi libero voluptatem doloribus voluptatibus!"
      />
      <div className="z-10 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {companies.map((company, index) => (
            <CompanyTile key={index} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
}
