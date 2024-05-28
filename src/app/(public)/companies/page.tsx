import { getQueryClient } from '@/app/utils/rq/react-query-client';
import { ReactQueryHydrate } from '@/app/utils/rq/react-query-hydrate';
import Hero from '@/components/ui/hero';
import { GET_PROMOTED_COMPANIES_KEY } from '@/hooks/usePromotedCompanies';
import { getPromotedCompanies } from '@/lib/companies';
import { dehydrate } from '@tanstack/react-query';
import Image from 'next/image';
import CompaniesGallery from './_components/companies-gallery';
export default async function Companies() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [GET_PROMOTED_COMPANIES_KEY],
    queryFn: getPromotedCompanies,
  });
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
        vectorUrl="/assets/companies/companies-hero.png"
      />
      <div className="z-10 flex items-center justify-center">
        <ReactQueryHydrate state={dehydrate(queryClient)}>
          <CompaniesGallery />
        </ReactQueryHydrate>
      </div>
    </div>
  );
}
