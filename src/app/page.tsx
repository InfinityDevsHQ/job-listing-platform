import CompaniesList from '@/components/companies/companies-list';
import JobsList from '@/components/jobs/jobs-list';
import FireIcon from '@/components/svgs/fire';
import { CarouselItem } from '@/components/ui/carousel';
import Hero from '@/components/ui/hero';
import SectionHeader from '@/components/ui/section-header';
import { GET_PROMOTED_COMPANIES_KEY } from '@/hooks/usePromotedCompanies';
import { getPromotedCompanies } from '@/lib/companies';
import { dehydrate } from '@tanstack/react-query';
import { Building2Icon, ListCollapseIcon } from 'lucide-react';
import Image from 'next/image';
import AutoPlayCarousel from './recruit/_components/autoplay-carousel';
import { useGetJobsPrefetch } from './utils/rq/hooks/use-jobs';
import { getQueryClient } from './utils/rq/react-query-client';
import { ReactQueryHydrate } from './utils/rq/react-query-hydrate';

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
    <div className="mx-auto flex max-w-6xl flex-col gap-8 p-4 lg:p-8">
      <Hero
        heading="Find your dream job here"
        desc="Explore the latest job openings and apply for the best job opportunities available today!"
        vectorUrl="/assets/images/home/homePage_hero_section_vector.svg"
      />
      <div className="mx-auto w-full overflow-hidden md:max-w-3xl lg:max-h-40">
        <AutoPlayCarousel showNavControls={false}>
          <CarouselItem className="mx-1 basis-1/3 rounded-xl border p-4 lg:mx-3 lg:basis-1/5">
            <Image
              src="/assets/companies/logos/company- (1).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-1"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-xl border p-4 lg:mx-3 lg:basis-1/5">
            <Image
              src="/assets/companies/logos/company- (2).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-2"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-xl border p-4 lg:mx-3 lg:basis-1/5">
            <Image
              src="/assets/companies/logos/company- (3).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-3"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-xl border p-4 lg:mx-3 lg:basis-1/5">
            <Image
              src="/assets/companies/logos/company- (4).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-4"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-xl border p-4 lg:mx-3 lg:basis-1/5">
            <Image
              src="/assets/companies/logos/company- (5).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-5"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-xl border p-4 lg:mx-3 lg:basis-1/5">
            <Image
              src="/assets/companies/logos/company- (6).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-6"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-xl border p-4 lg:mx-3 lg:basis-1/5">
            <Image
              src="/assets/companies/logos/company- (7).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-7"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-xl border p-4 lg:mx-3 lg:basis-1/5">
            <Image
              src="/assets/companies/logos/company- (8).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-8"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-xl border p-4 lg:mx-3 lg:basis-1/5">
            <Image
              src="/assets/companies/logos/company- (9).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-9"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-xl border p-4 lg:mx-3 lg:basis-1/5">
            <Image
              src="/assets/companies/logos/company- (10).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-10"
            />
          </CarouselItem>
        </AutoPlayCarousel>
      </div>
      <SectionHeader
        leadingIcon={<FireIcon className="h-6 w-6 text-red-500 lg:h-7 lg:w-6" />}
        heading="Latest Hot Offers"
      />
      <ReactQueryHydrate state={dehydrate(queryClient)}>
        <JobsList hot />
      </ReactQueryHydrate>

      <SectionHeader
        leadingIcon={<ListCollapseIcon className="h-7 w-7 text-blue-500" />}
        heading={'All offers from 2,300+ companies'}
      />
      <ReactQueryHydrate state={dehydrate(queryClient)}>
        <JobsList />
      </ReactQueryHydrate>
      <SectionHeader
        leadingIcon={<Building2Icon className="h-7 w-7 text-black" />}
        heading="Companies that will grow you forward"
      />
      <ReactQueryHydrate state={dehydrate(queryClient)}>
        <CompaniesList />
      </ReactQueryHydrate>
    </div>
  );
}
