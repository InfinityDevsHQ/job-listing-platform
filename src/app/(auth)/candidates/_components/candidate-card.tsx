import CartIcon from '@/components/svgs/cart-icon';
import CompanyLocation from '@/components/svgs/company-location';
import { Button } from '@/components/ui/button-new';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
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
    <div className="max-w-80 rounded-md border border-gray-200 bg-gray-50 lg:p-4">
      <div className="flex flex-col gap-4">
        <header className="flex gap-4 p-4">
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
        <div className="flex items-center justify-center gap-4 p-4">
          <Button
            variant={'outline'}
            className="flex flex-1 items-center gap-2 bg-white text-gray-800 lg:text-base"
            size={'lg'}
          >
            <Eye size={16} />
            View Profile
          </Button>
          <Button
            variant={'outline'}
            className="flex flex-1 items-center gap-2 bg-white text-gray-800 lg:text-base"
            size={'lg'}
          >
            <Eye size={16} />
            Resume
          </Button>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <h4 className="text-base font-bold text-gray-700">About</h4>
          <p className="max-h-12 overflow-hidden text-ellipsis text-base text-gray-500">
            {candidateData.about}
          </p>
        </div>
        {candidateData.skillSet?.length && (
          <Carousel
            className="flex w-full"
            opts={{
              loop: true,
            }}
          >
            {/* <CarouselPrevious text={''} className="relative left-0 translate-x-0 translate-y-0" /> */}
            <CarouselContent>
              {candidateData.skillSet?.map((skill, index) => (
                <CarouselItem key={index} className="basis-1/4">
                  <div className="p-1">
                    <div>
                      <span className="tag">{skill}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselNext text={''} className="relative left-0 translate-x-0 translate-y-0" /> */}
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
