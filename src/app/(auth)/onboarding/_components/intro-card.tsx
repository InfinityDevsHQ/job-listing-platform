import { Button } from '@/components/ui/button-new';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import AITile from './ai-tile';

const IntroCard = () => {
  return (
    <div className="flex flex-col gap-4 rounded-md border border-gray-200 bg-white p-4 shadow-card lg:p-8">
      <AITile />
      <div className="flex flex-col gap-2 lg:gap-4">
        <h4 className="text-lg font-bold text-gray-700 lg:text-2xl">
          Let&apos;s start with filling out your profile
        </h4>
        <p className="text-sm text-gray-500 lg:text-base">
          Want to improve your job search? Start by completing your profile. It&apos;ll help AI find
          the perfect job for you.
        </p>
      </div>
      <div className="flex flex-col gap-2 lg:gap-4">
        <h5 className="font-700 text-base font-bold text-gray-500 lg:text-xl">How it works?</h5>
        <p className="text-sm text-gray-500 lg:text-base">
          Complete your profile and let our AI-driven platform bring job opportunities straight to
          you — no searching required.
        </p>
      </div>
      <div className="flex flex-col gap-2 lg:gap-4">
        <h5 className="font-700 text-base font-bold text-gray-500 lg:text-xl">How to get?</h5>
        <div>
          <h6 className="text-sm font-bold text-gray-500 lg:text-base">
            Handpicked Opportunities:
          </h6>
          <p className="text-sm text-gray-500 lg:text-base">
            Forget spam. Receive only the jobs that align with your career goals.
          </p>
        </div>
        <div>
          <h6 className="text-sm font-bold text-gray-500 lg:text-base">Stay in the Loop</h6>
          <p className="text-sm text-gray-500 lg:text-base">
            Real time notifications direct to your inbox.
          </p>
        </div>
        <div>
          <h6 className="text-sm font-bold text-gray-500 lg:text-base">One-Click-Apply</h6>
          <p className="text-sm text-gray-500 lg:text-base">
            A full profile equals on-click applications. It&apos; that simple.
          </p>
        </div>
      </div>
      <Link href={'?step=location'} className="self-end">
        <Button className="flex items-center">
          Let&apos;s Go
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};

export default IntroCard;
