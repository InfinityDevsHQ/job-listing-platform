import JobCardDetails from '@/_components/jobs/_components/job-card-details';
import JobCardHeader from '@/_components/jobs/_components/job-card-header';
import Badges from '@/components/ui/badges';
import { JobProps } from '@/types/types';
import { useState } from 'react';

export default function JobCard({ job }: JobProps) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      onClick={() => setIsOpened(!isOpened)}
      className="flex cursor-pointer select-none flex-col gap-4 overflow-hidden rounded-md border border-gray-200 bg-white p-4 duration-500 animate-in fade-in lg:gap-8 lg:p-8"
    >
      <JobCardHeader job={job} />
      <JobCardDetails job={job} />
      {isOpened && (
        <div className="flex flex-col gap-4 duration-500 animate-in fade-in fade-out lg:gap-8">
          {job?.description && (
            <p className="text-xs text-neutral-600 lg:text-sm">{job?.description}</p>
          )}
          <span className="border-b border-gray-200" />
          <Badges badges={job?.skill_tags?.map((tag) => ({ text: tag }))} />
        </div>
      )}
    </div>
  );
}
