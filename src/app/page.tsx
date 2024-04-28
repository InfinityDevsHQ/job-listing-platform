import CompaniesList from '@/components/companies/companies-list';
import JobsList from '@/components/jobs/jobs-list';
import FireIcon from '@/components/svgs/fire';
import Hero from '@/components/ui/hero';
import SectionHeader from '@/components/ui/section-header';

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-8 p-4 lg:p-16">
      <div className="col-span-3 flex flex-col gap-4 lg:col-span-2 lg:gap-8">
        <Hero />
        <SectionHeader
          leadingIcon={<FireIcon className="h-5 w-4 text-red-900 lg:h-7 lg:w-6" />}
          heading="Latest Hot Offers"
          helpText={`JOBS`}
        />
        <JobsList />
      </div>
      <div className="col-span-3 flex flex-col gap-5 lg:col-span-1">
        <SectionHeader
          leadingIcon={<FireIcon className="h-5 w-4 text-black lg:h-7 lg:w-6" />}
          heading="Companies That Will Grow You Forward"
        />
        <div className="overflow-x-auto">
          <CompaniesList />
        </div>
      </div>
    </div>
  );
}
