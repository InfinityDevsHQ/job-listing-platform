'use client';
import Badges from '@/components/ui/badges';
import { Button } from '@/components/ui/button-new';
import { cn } from '@/lib/utils';
import { JobProps } from '@/types/types';
import { ArrowRight, BriefcaseBusinessIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import JobCardDetails from './job-card-details';
import JobCardHeader from './job-card-header';

export default function JobCard({ job }: JobProps) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="relative flex transform flex-col gap-4 overflow-hidden rounded-2xl bg-stone-100 p-4 shadow ring-1 ring-gray-200/50 backdrop-blur-md transition-all duration-300 animate-in fade-in hover:-translate-y-1 hover:shadow-lg">
      {job.is_hot && (
        <div className="absolute right-0 top-0">
          <div className="absolute -right-11 top-3 flex h-6 w-32 items-center justify-center md:-right-8 lg:top-4">
            <div className="h-full w-full rotate-45 transform bg-red-500 text-center text-sm font-semibold leading-6 text-white lg:text-base">
              HOT
            </div>
          </div>
        </div>
      )}
      <div
        onClick={() => setIsOpened(!isOpened)}
        className="flex cursor-pointer select-none items-center gap-4"
      >
        <div
          className={cn(
            'hidden h-14 w-14 items-center justify-center rounded-full bg-blue-100 md:flex',
            {
              'bg-red-100': job?.is_hot,
            }
          )}
        >
          {/* {job?.external_company_logo ? (
            <Image
              src={job.external_company_logo}
              width={100}
              height={100}
              alt="company logo"
              className="ml-auto h-96 w-96 rounded-2xl"
            />
          ) : (
          )} */}
          <BriefcaseBusinessIcon
            className={cn('text-blue-500', {
              'text-red-500': job?.is_hot,
            })}
          />
        </div>
        <div className="flex cursor-pointer select-none flex-col gap-2">
          <JobCardHeader job={job} />
          <JobCardDetails job={job} />
        </div>
      </div>
      {isOpened && job?.id && (
        <>
          {job?.description && (
            <p className="text-sm text-neutral-600 lg:text-base">{job?.description}</p>
          )}
          <span className="border-b border-gray-300" />
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <Badges badges={job?.skill_tags?.map((tag) => ({ text: tag }))} />
            <span className="border-b border-gray-300 md:hidden" />
            <Button onClick={(e) => e.stopPropagation()} variant="primary" className="max-w-max">
              <Link href={`/jobs/${job.id}`} className="flex items-center">
                More Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
