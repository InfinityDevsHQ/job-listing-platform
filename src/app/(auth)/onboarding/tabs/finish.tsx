import TermsAndConditionsForm from '@/components/forms/onboarding/terms-and-conditions-form';
import Image from 'next/image';
import BoardingHeader from '../_components/boarding-header';

export default function Finish() {
  return (
    <div className="grid w-full grid-cols-2">
      <div className="col-span-2 hidden items-center justify-center lg:col-span-1 lg:flex">
        <Image
          src={'/assets/boarding/location_poster.png'}
          alt="Location Poster"
          width={580}
          height={580}
        />
      </div>
      <div className="col-span-2 flex w-full flex-col justify-center gap-4 lg:col-span-1">
        <BoardingHeader title="5. Finish" />
        <p className="mt-4 font-sans text-sm font-bold text-mute-3 lg:mt-8 lg:text-xl">
          Let&apos;s make some career magic happen!
        </p>
        <p className="new-gray mt-4 font-sans text-sm lg:mt-8 lg:text-base">
          Please take a moment to review our terms of use. Once you click &quot;Finish&quot;,
          you&apos;re all set for a new frontier of job opportunities.
        </p>
        <TermsAndConditionsForm />
      </div>
    </div>
  );
}
