'use client';
import JobsList from '@/components/jobs/jobs-list';
import FireIcon from '@/components/svgs/fire';
import Hero from '@/components/ui/hero';
import SectionHeader from '@/components/ui/section-header';
import { useAllJobs } from '@/hooks/useAllJobs';

export default function Home() {
  const { isLoading, error, data: jobs } = useAllJobs({ isHot: true });
  if (isLoading) return <p>Loading......</p>;
  if (error) return <p>Error while getting data: {error.message}</p>;
  if (jobs) {
    return (
      <div className="grid grid-cols-3 gap-8 p-4 lg:p-8">
        <div className="col-span-3 flex flex-col gap-4 lg:col-span-2 lg:gap-8">
          <Hero
            heading="Find your dream job here"
            desc="Explore the latest job openings and apply for the best job opportunities available today!"
            vectorUrl="/assets/images/home/homePage_hero_section_vector.png"
          />
          <SectionHeader
            leadingIcon={<FireIcon className="h-5 w-4 text-red-900 lg:h-7 lg:w-6" />}
            heading="Latest Hot Offers"
            helpText={`${jobs?.length} JOBS`}
          />
          <JobsList jobs={jobs} />
        </div>
        <div className="col-span-3 flex flex-col gap-5 lg:col-span-1">
          <SectionHeader
            leadingIcon={<FireIcon className="h-5 w-4 text-black lg:h-7 lg:w-6" />}
            heading="Companies That Will Grow You Forward"
          />
          <div className="overflow-x-auto">{/* <CompaniesList companies={companies} /> */}</div>
        </div>
      </div>
    );
  }
}
