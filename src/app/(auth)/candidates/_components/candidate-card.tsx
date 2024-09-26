import CompanyLocation from '@/components/svgs/company-location';
import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button-new';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { getColorClasses } from '@/lib/utils';
import { CandidateCardData } from '@/types/types';
import { Eye, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

type CandidateCardProps = {
  candidateData: CandidateCardData;
};
export default function CandidateCard({ candidateData }: CandidateCardProps) {
  return (
    <div className="max-w-96 rounded-md border border-dark-background3 bg-dark-primary p-2 text-dark-nameWhite xs:p-4 lg:max-w-none lg:px-8 lg:py-4">
      <div className="flex flex-col">
        <header className="mb-4 flex gap-4">
          <div className="flex items-center justify-center">
            <Image
              src={candidateData.candidateImgUrl}
              alt={`${candidateData.name} Profile Picture`}
              width={75}
              height={75}
              className="h-auto w-auto flex-1 rounded-full lg:self-stretch"
            />
          </div>
          <div className="flex flex-col">
            <h5 className="text-lg font-bold ">{candidateData.name}</h5>
            <h6 className="text-sm text-dark-name">{candidateData.profession}</h6>
            <div className="flex items-center gap-2 text-dark-nameHalfWhite">
              <CompanyLocation width={11} height={12} />
              <p className="text-xs xs:text-base">{candidateData.location}</p>
            </div>
          </div>
        </header>
        <div className="flex items-center gap-4">
          <Button variant="primary" className="w-2/5 xs:w-1/2">
            <Eye className="mr-2 h-4 w-4" />
            View Profile
          </Button>
          <Button variant="primary" className="w-2/5 xs:w-1/2">
            <Eye className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
        <div className="flex flex-col gap-4 py-4">
          <h4 className="text-base font-bold text-dark-nameWhite">About</h4>
          <p className="overflow-hidden text-ellipsis text-base text-dark-name lg:max-h-12">
            {candidateData.about}
          </p>
        </div>
        <h4 className="mb-4 text-base font-bold text-dark-nameWhite">Skillset</h4>
        {candidateData.skillSet?.length && (
          <Carousel
            className="relative my-4 flex w-full max-w-64 items-center justify-center xs:max-w-full"
            opts={{
              loop: true,
            }}
          >
            <CarouselPrevious className="absolute left-0 top-0 z-10 translate-x-0 translate-y-0 border-dark-background3 bg-dark-primary hover:text-dark-nameWhite" />
            <CarouselContent className="flex max-w-80 items-center gap-2 ">
              {candidateData.skillSet?.map((skill, index) => (
                <CarouselItem key={index} className="mt-1 basis-1/4 !pl-0">
                  <Badge
                    text={skill}
                    color={getColorClasses(index)?.textColor}
                    bgColor={getColorClasses(index)?.bgColor}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="absolute right-0 top-0 translate-x-0 translate-y-0 border-dark-background3 bg-dark-primary hover:text-dark-nameWhite" />
          </Carousel>
        )}
        <Button size="lg" variant={'primary'}>
          Add to Cart
          <ShoppingCart className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
