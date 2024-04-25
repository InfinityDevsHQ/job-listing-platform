import CartIcon from '@/components/svgs/cart-icon';
import CompanyEye from '@/components/svgs/company-eye';
import CompanyLocation from '@/components/svgs/company-location';
import Button from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';

type CandidateCardProps = {
  candidateData: CandidateCardData;
};
export default function CandidateCard({ candidateData }: CandidateCardProps) {
  return (
    <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
      <div className="flex flex-col gap-4 ">
        <header className="flex gap-4">
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
        <div className="flex items-center gap-4">
          <Button
            text="View Profile"
            leadingIcon={<CompanyEye width={16} height={16} />}
            size="full"
            className="bg-white"
          />
          <Button
            text="Resume"
            leadingIcon={<CompanyEye width={16} height={16} />}
            size="full"
            className="bg-white"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-bold text-gray-700">About</h4>
          <p className="max-h-12 overflow-hidden text-ellipsis text-base text-gray-500">
            {candidateData.about}
          </p>
        </div>
        {candidateData.skillSet?.length > 0 && (
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

        <Button text="Add to Cart" size="full" variant="primary" trailingIcon={<CartIcon />} />
      </div>
    </div>
  );
}
