import AutoPlayCarousel from '@/app/(public)/recruit/_components/autoplay-carousel';
import Image from 'next/image';
import { CarouselItem } from '../ui/carousel';
export default function TopBrandsSection() {
  return (
    <section className="flex w-full flex-col items-center gap-8">
      <h2 className="text-xl font-bold text-gray-700 lg:text-4xl">Top brands trust ClickJob</h2>
      <span className="text-gray-500">
        We help over 270 recruitment agencies and companies across every industry to make their
        selection process more efficient
      </span>
      <div className="max-w-4xl overflow-hidden lg:max-h-40">
        <AutoPlayCarousel showNavControls={false}>
          <CarouselItem className="mx-1 basis-1/3 rounded-md border border-neutral-200 bg-white p-4 lg:mx-3 lg:basis-1/6">
            <Image
              src="/assets/companies/logos/company- (1).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-1"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-md border border-neutral-200 bg-white p-4 lg:mx-3 lg:basis-1/6">
            <Image
              src="/assets/companies/logos/company- (2).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-2"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-md border border-neutral-200 bg-white p-4 lg:mx-3 lg:basis-1/6">
            <Image
              src="/assets/companies/logos/company- (3).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-3"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-md border border-neutral-200 bg-white p-4 lg:mx-3 lg:basis-1/6">
            <Image
              src="/assets/companies/logos/company- (4).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-4"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-md border border-neutral-200 bg-white p-4 lg:mx-3 lg:basis-1/6">
            <Image
              src="/assets/companies/logos/company- (5).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-5"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-md border border-neutral-200 bg-white p-4 lg:mx-3 lg:basis-1/6">
            <Image
              src="/assets/companies/logos/company- (6).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-6"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-md border border-neutral-200 bg-white p-4 lg:mx-3 lg:basis-1/6">
            <Image
              src="/assets/companies/logos/company- (7).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-7"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-md border border-neutral-200 bg-white p-4 lg:mx-3 lg:basis-1/6">
            <Image
              src="/assets/companies/logos/company- (8).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-8"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-md border border-neutral-200 bg-white p-4 lg:mx-3 lg:basis-1/6">
            <Image
              src="/assets/companies/logos/company- (9).png"
              width={150}
              height={100}
              className="mx-auto h-16 lg:h-20"
              alt="company-9"
            />
          </CarouselItem>
          <CarouselItem className="mx-1 basis-1/3 rounded-md border border-neutral-200 bg-white p-4 lg:mx-3 lg:basis-1/6">
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
    </section>
  );
}
