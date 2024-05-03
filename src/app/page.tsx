import CompaniesList from '@/components/companies/companies-list';
import JobsList from '@/components/jobs/jobs-list';
import FireIcon from '@/components/svgs/fire';
import Button from '@/components/ui/button';
import Hero from '@/components/ui/hero';
import SectionHeader from '@/components/ui/section-header';
import { getPromotedCompanies } from '@/lib/companies';
import { getJobs } from '@/lib/jobs';

export default async function Home() {
  const jobs = await getJobs({});
  const companies = await getPromotedCompanies();
  let skip = 10;
  let limit = 25;
  console.log('Jobs', jobs.length);
  const loadMore = async () => {
    skip = skip + 25;
    limit = limit + 25;
    const newJobs = await getJobs({ skip, limit });
    jobs.push(...newJobs);
  };
  return (
    <div className="grid grid-cols-3 gap-8 p-4 lg:p-8">
      <div className="col-span-3 flex flex-col gap-4 lg:col-span-2 lg:gap-8">
        <Hero
          heading="Find your dream job here"
          desc="Explore the latest job openings and apply for the best job opportunities available today!"
        />
        <SectionHeader
          leadingIcon={<FireIcon className="h-5 w-4 text-red-900 lg:h-7 lg:w-6" />}
          heading="Latest Hot Offers"
          helpText={`${jobs?.length} JOBS`}
        />
        <JobsList jobs={jobs} />
        <Button text="Load More" variant="primary" className="self-end" />
      </div>
      <div className="col-span-3 flex flex-col gap-5 lg:col-span-1">
        <SectionHeader
          leadingIcon={<FireIcon className="h-5 w-4 text-black lg:h-7 lg:w-6" />}
          heading="Companies That Will Grow You Forward"
        />
        <div className="overflow-x-auto">
          <CompaniesList companies={companies} />
        </div>
      </div>
    </div>
  );
}
