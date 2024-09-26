import { getQueryClient } from '@/app/utils/rq/react-query-client';
import { ReactQueryHydrate } from '@/app/utils/rq/react-query-hydrate';
import { GET_PROMOTED_COMPANIES_KEY } from '@/hooks/usePromotedCompanies';
import { getPromotedCompanies } from '@/lib/companies';
import { dehydrate } from '@tanstack/react-query';
import Image from 'next/image';
import CompaniesGallery from './_components/companies-gallery';
import Hero from './_components/hero';
export default async function Companies() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [GET_PROMOTED_COMPANIES_KEY],
    queryFn: getPromotedCompanies,
  });
  return (
    <div className="bg-dark-background">
      <div className="relative mx-auto flex max-w-screen-2xl flex-col gap-4 bg-dark-background p-4 lg:gap-8 lg:p-8">
        <Image
          src={'/assets/companies/white-vector.png'}
          width={1411}
          height={840}
          alt="Vector"
          className="absolute right-0 top-0 opacity-20"
        />
        <Hero
          heading="Explore Companies Offering Job Opportunities"
          desc="Amet nulla dolore ullam quia maxime laboriosam obcaecati nostrum ad aliquam, modi libero voluptatem doloribus voluptatibus!"
          vectorUrl="/assets/companies/companies-hero.png"
          search
        />
        <div className="z-10 flex items-center justify-center">
          <ReactQueryHydrate state={dehydrate(queryClient)}>
            <CompaniesGallery />
          </ReactQueryHydrate>
        </div>
      </div>
    </div>
  );
}
