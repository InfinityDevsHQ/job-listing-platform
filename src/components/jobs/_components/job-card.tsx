'use client';
import Badges from '@/components/ui/badges';
import { JobProps } from '@/types/types';
import Link from 'next/link';
import JobCardDetails from './job-card-details';
import JobCardHeader from './job-card-header';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function JobCard({ job }: JobProps) {
  return (
    <Accordion type="single" defaultValue="" collapsible className="flex w-full flex-col gap-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className="p-4">
          <div className="no-arrow peer flex w-full cursor-pointer select-none flex-col gap-4 lg:gap-8">
            <JobCardHeader job={job} />
            <JobCardDetails job={job} />
          </div>
        </AccordionTrigger>
        {job?.id && (
          <AccordionContent>
            <Link
              className="flex cursor-default flex-col gap-4 duration-500 animate-in fade-in fade-out lg:gap-8"
              href={`/jobs/${job.id}`}
            >
              {job?.description && (
                <p className="text-xs text-neutral-600 lg:text-sm">{job?.description}</p>
              )}
              <span className="border-b border-gray-200" />
              <Badges badges={job?.skill_tags?.map((tag) => ({ text: tag }))} />
            </Link>
          </AccordionContent>
        )}
      </AccordionItem>
    </Accordion>
  );
}
