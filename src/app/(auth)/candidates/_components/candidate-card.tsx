import CartIcon from '@/components/svgs/cart-icon';
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
import { Eye } from 'lucide-react';
import Image from 'next/image';
type CandidateCardData = {
  name: string;
  candidateImgUrl: string;
  profession: string;
  location: string;
  about: string;
  skillSet?: string[];
};

type CandidateCardProps = {
  candidateData: CandidateCardData;
};
export default function CandidateCard({ candidateData }: CandidateCardProps) {
  return (
    <div className="max-w-80 rounded-md border border-gray-200 bg-gray-50 p-4 lg:max-w-none">
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
            <h5 className="text-lg font-bold text-gray-950">{candidateData.name}</h5>
            <h6 className="text-sm text-gray-500">{candidateData.profession}</h6>
            <div className="flex items-center gap-2 text-gray-950">
              <CompanyLocation width={11} height={12} />
              <p>{candidateData.location}</p>
            </div>
          </div>
        </header>
        <div className="flex  items-stretch  gap-4">
          <Button
            variant={'outline'}
            className="flex-1 basis-1/2 items-center bg-white text-gray-800 lg:text-base"
            size={'lg'}
          >
            <Eye size={16} className="mr-2" />
            View Profile
          </Button>
          <Button
            variant={'outline'}
            className="flex-1 basis-1/2 bg-white text-gray-800 lg:text-base"
          >
            <Eye size={16} className="mr-2" />
            Resume
          </Button>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <h4 className="text-base font-bold text-gray-700">About</h4>
          <p className="overflow-hidden text-ellipsis text-base text-gray-500 lg:max-h-12">
            {candidateData.about}
          </p>
        </div>
        {candidateData.skillSet?.length && (
          <Carousel
            className="mb-4 flex w-full"
            opts={{
              loop: true,
            }}
          >
            <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0" />
            <CarouselContent className="flex items-center">
              {candidateData.skillSet?.map((skill, index) => (
                <CarouselItem key={index} className="basis-1/4">
                  <Badge
                    text={skill}
                    color={getColorClasses(index)?.textColor}
                    bgColor={getColorClasses(index)?.bgColor}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="relative left-0 translate-x-0 translate-y-0" />
          </Carousel>
        )}
        <Button className="gap-2">
          Add to Cart
          <CartIcon />
        </Button>
      </div>
    </div>
  );
}
