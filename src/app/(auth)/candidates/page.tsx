import Hero from '@/app/(public)/companies/_components/hero';
import { GET_ALL_CANDIDATES_KEY } from '@/app/utils/rq/hooks/use-all-candidates';
import { getQueryClient } from '@/app/utils/rq/react-query-client';
import { ReactQueryHydrate } from '@/app/utils/rq/react-query-hydrate';
import { getAllCandidates } from '@/lib/candidates';
import { dehydrate } from '@tanstack/react-query';
import CandidateList from './_components/candidate-list';
import CandidatePagination from './_components/candidates-pagination';
export default async function Candidates() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [GET_ALL_CANDIDATES_KEY],
    queryFn: getAllCandidates,
  });
  return (
    <div className="mx-auto max-w-screen-2xl bg-primary-50 p-4 lg:p-8">
      <Hero
        heading="Find best candidates for you!"
        desc="Bibendum non id pharetra integer. Enim arcu accumsan diam tempus magna duis urna id."
        vectorUrl="/assets/candidates/candidate-hero.png"
        search
      />
      <div className="flex flex-col gap-4 rounded-md bg-gray-50 py-4 lg:gap-8 lg:bg-transparent lg:py-8">
        <ReactQueryHydrate state={dehydrate(queryClient)}>
          <CandidateList />
        </ReactQueryHydrate>
      </div>
      <CandidatePagination />
    </div>
  );
}
