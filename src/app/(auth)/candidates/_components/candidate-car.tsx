import Tags from '@/_components/tags';
import CompanyEye from '@/components/svgs/company-eye';
import CompanyLocation from '@/components/svgs/company-location';
import Button from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
type CandidateData = {
  name: string;
  candidateImgUrl: string;
  profession: string;
  location: string;
  about: string;
  skillSet: string[];
};
type CandidateCardProps = {
  candidateData: CandidateData[];
};
export default function CandidateCard({ candidateData }: CandidateCardProps) {
  return (
    <div className="border border-gray-200 bg-gray-50 p-4">
      <div className="flex flex-col gap-4 ">
        <header className="flex gap-4">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/"
              alt="ok"
              width={75}
              height={75}
              className="h-auto w-auto rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h5 className="text-lg font-bold text-gray-950">John Doe</h5>
            <h6 className="text-sm text-gray-500">Software Engineer</h6>
            <div className="flex items-center gap-2 text-gray-950">
              <CompanyLocation width={11} height={12} />
              <p>NY, USA</p>
            </div>
          </div>
        </header>
        <div className="flex items-center gap-4">
          <Button text="View Profile" leadingIcon={<CompanyEye width={16} height={16} />} />
          <Button text="Resume" leadingIcon={<CompanyEye width={16} height={16} />} />
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-bold text-gray-700">About</h4>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa excepturi tempora
            voluptas ducimus voluptate, tenetur corrupti eaque qui, ratione tempore aut veritatis
            consectetur, exercitationem quidem explicabo labore. Atque, quos nulla!
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Button text="" leadingIcon={<ArrowRight />} />
          <Tags python sql django />
          <Button text="" leadingIcon={<ArrowRight />} />
        </div>
        <Button text="Add to Cart" size="full" variant="primary" />
      </div>
    </div>
  );
}
