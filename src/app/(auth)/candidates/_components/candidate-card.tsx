import Tags from '@/_components/tags';
import CompanyEye from '@/components/svgs/company-eye';
import CompanyLocation from '@/components/svgs/company-location';
import Button from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

type CandidateCardProps = {
  candidateData: CandidateCardData;
};
export default function CandidateCard({ candidateData }: CandidateCardProps) {
  return (
    <div className="border border-gray-200 bg-gray-50 p-4">
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
          />
          <Button text="Resume" leadingIcon={<CompanyEye width={16} height={16} />} size="full" />
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-bold text-gray-700">About</h4>
          <p className="text-base text-gray-500">{candidateData.about}</p>
        </div>
        <div className="flex items-center justify-between">
          <Button text="" leadingIcon={<ArrowRight />} />
          <Tags django sql python />
          <Button text="" leadingIcon={<ArrowRight />} />
        </div>
        <Button text="Add to Cart" size="full" variant="primary" />
      </div>
    </div>
  );
}
