import CompaniesCarousel from '@/components/companies/companies-carousel';
import CompaniesList from '@/components/companies/companies-list';
import JobListingSearchBard from '@/components/homepage/job-listing-search-bar';
import JobsList from '@/components/jobs/jobs-list';
import { RecommendedJobs } from '@/components/jobs/recommended-jobs';
import SectionHeader from '@/components/ui/section-header';
import { GET_PROMOTED_COMPANIES_KEY } from '@/hooks/usePromotedCompanies';
import { getPromotedCompanies } from '@/lib/companies';
import { dehydrate } from '@tanstack/react-query';
import { List, Plane } from 'lucide-react';
import { useGetJobsPrefetch } from '../utils/rq/hooks/use-jobs';
import { getQueryClient } from '../utils/rq/react-query-client';
import { ReactQueryHydrate } from '../utils/rq/react-query-hydrate';

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
      <div className="grid w-screen bg-primary-50 p-4 sm:w-auto lg:grid-cols-3 lg:gap-8 lg:p-8">
        <div className="col-span-2 flex flex-col gap-8">
          <JobListingSearchBard />
          <RecommendedJobs />
          <div className="flex w-screen flex-col items-center justify-center gap-4 overflow-x-hidden lg:hidden">
            <SectionHeader
              heading="Companies that will grow you forward."
              leadingIcon={<Plane className="h-6 w-6 text-red-500 lg:h-7 lg:w-6" />}
            />
            <CompaniesCarousel />
          </div>
          <SectionHeader leadingIcon={<List className="text-red-500" />} heading="All Offers" />
          <JobsList />
        </div>
        <div className="hidden flex-col items-center gap-8 lg:flex">
          <SectionHeader
            heading="Companies that will grow you forward."
            leadingIcon={<Plane className="h-6 w-6 text-red-500 lg:h-7 lg:w-6" />}
          />
          <CompaniesList />
        </div>
      </div>
    </ReactQueryHydrate>
  );
}
