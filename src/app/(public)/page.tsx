import CompaniesList from '@/components/companies/companies-list';
import JobsList from '@/components/jobs/jobs-list';
import { RecommendedJobs } from '@/components/jobs/recommended-jobs';
import SectionHeader from '@/components/ui/section-header';
import { GET_PROMOTED_COMPANIES_KEY } from '@/hooks/usePromotedCompanies';
import { getPromotedCompanies } from '@/lib/companies';
import { dehydrate } from '@tanstack/react-query';
import { List } from 'lucide-react';
import { useGetJobsPrefetch } from '../utils/rq/hooks/use-jobs';
import { getQueryClient } from '../utils/rq/react-query-client';
import { ReactQueryHydrate } from '../utils/rq/react-query-hydrate';
import Hero from './companies/_components/hero';

export default async function Home() {
  const queryClient = getQueryClient();
  await Promise.allSettled([
    await useGetJobsPrefetch(true),
    await useGetJobsPrefetch(false),
    queryClient.prefetchQuery({
      queryKey: [GET_PROMOTED_COMPANIES_KEY],
      queryFn: getPromotedCompanies,
    }),
  ]);
  return (
    <ReactQueryHydrate state={dehydrate(queryClient)}>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <Hero
            heading="Find your dream job here!"
            desc="Explore the latest job openings and apply for the best job opportunities available today!"
            search
          />
          <RecommendedJobs />
          <SectionHeader leadingIcon={<List className="text-red-500" />} heading="All Offers" />
          <JobsList />
        </div>
        <div className="ml-auto">
          <CompaniesList />
        </div>
      </div>
    </ReactQueryHydrate>
  );
}
