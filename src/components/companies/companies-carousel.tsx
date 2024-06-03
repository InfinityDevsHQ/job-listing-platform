'use client';
import { usePromotedCompanies } from '@/hooks/usePromotedCompanies';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import CompanyCard from './company-card';
export default function CompaniesCarousel() {
  const { isLoading, error, data: promotedCompanies } = usePromotedCompanies();
  return (
    <Carousel className="w-full overflow-hidden">
      <CarouselContent>
        {promotedCompanies?.map((company) => (
          <CarouselItem key={company.id} className="sm:basis-2/3">
            <CompanyCard
              id={company.id}
              name={company.name}
              logo_url={company.logo_url}
              description={company.description || ''}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
