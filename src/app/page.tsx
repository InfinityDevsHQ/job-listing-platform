import JobsList from '@/components/jobs/jobs-list';
import FireIcon from '@/components/svgs/fire';
import Hero from '@/components/ui/hero';
import SectionHeader from '@/components/ui/section-header';
import { getJobs } from '@/lib/jobs';
import { dehydrate } from '@tanstack/react-query';
import { getQueryClient } from './utils/rq/react-query-client';
import { ReactQueryHydrate } from './utils/rq/react-query-hydrate';

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['allJobs'],
    queryFn: async () => await getJobs({ is_hot: true }),
  });
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
        />
        <ReactQueryHydrate state={dehydrate(queryClient)}>
          <JobsList homepage />
        </ReactQueryHydrate>
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
