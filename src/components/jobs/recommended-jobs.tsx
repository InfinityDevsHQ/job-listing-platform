'use client';

import { useUserProfile } from '@/app/utils/rq/hooks/use-auth';
import { BookDown } from 'lucide-react';
import FireIcon from '../svgs/fire';
import SectionHeader from '../ui/section-header';
import HotJobs from './hot-jobs-list';
import TailoredJobs from './tailored-jobs-list';

export const RecommendedJobs = () => {
  const { data } = useUserProfile();
  if (!data?.user_data?.id) {
    return (
      <section className="flex flex-col gap-4 overflow-x-hidden lg:gap-8">
        <SectionHeader
          leadingIcon={<FireIcon className="h-6 w-6 text-red-500 lg:h-7 lg:w-6" />}
          heading="Latest Hot Offers"
        />
        <HotJobs />
      </section>
    );
  }
  return (
    <section className="flex flex-col gap-4 overflow-x-hidden lg:gap-8">
      <SectionHeader
        leadingIcon={<BookDown className="h-6 w-6 text-red-500 lg:h-7 lg:w-6" />}
        heading="Ready-Set-Hired"
      />
      <TailoredJobs />
    </section>
  );
};
