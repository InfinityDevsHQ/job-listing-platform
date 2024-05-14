import CVForm from '@/components/forms/onboarding/cv-form';
import Image from 'next/image';
import BoardingHeader from '../_components/boarding-header';
export default function OnboardingStepTwo() {
  return (
    <div className="grid w-full grid-cols-2">
      <div className="col-span-2 hidden w-full items-center justify-center lg:col-span-1 lg:flex">
        <Image
          src={'/assets/boarding/cv_poster.png'}
          alt="Location Poster"
          width={580}
          height={580}
        />
      </div>
      <div className="col-span-2 flex w-full flex-col  gap-4 lg:col-span-1">
        <BoardingHeader
          title="2. Upload CV"
          description="Drop your CV here and kick back. Our AI scans, analyzes, and fills out your profile for you. Welcome to next level."
        />
        <CVForm />
      </div>
    </div>
  );
}
