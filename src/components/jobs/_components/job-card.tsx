'use client';
import formatDate from '@/app/utils/common/format-date';
import Badge from '@/components/ui/badge';
import { Button } from '@/components/ui/button-new';
import { getColorClasses } from '@/lib/utils';
import { JobProps } from '@/types/types';
import { AnimatePresence, motion } from 'framer-motion';
import { BaggageClaim, Calendar, CircleDollarSign, Clock, Locate, Users } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import JobCardHeader from './job-card-header';

export default function JobCard({ job }: JobProps) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className="flex cursor-pointer flex-col gap-4 rounded-md border border-gray-200 bg-white p-4 lg:p-8"
      onClick={() => setIsOpened(!isOpened)}
    >
      <JobCardHeader title={job.title || ''} is_hot={job.is_hot || false} company="Semrush" />
      <div className="grid grid-cols-3 items-center justify-between font-semibold text-neutral-900 lg:flex">
        <span className="flex items-center gap-2.5">
          <Clock className="h-2.5 w-3 lg:h-3 lg:w-3.5" />
          <span className="text-xxs capitalize lg:text-sm">{job.employment_type}</span>
        </span>
        <span className="hidden h-full w-0.5 bg-gray-200 lg:inline-block"></span>
        <span className="flex items-center gap-2.5">
          <Locate className="h-2.5 w-3 lg:h-3 lg:w-3.5" />
          <span className="text-xxs capitalize lg:text-sm">{job.city}</span>
        </span>
        <span className="hidden h-full w-0.5 bg-gray-200 lg:inline-block"></span>
        <span className="flex items-center gap-2.5 border-r-2 border-gray-50">
          <BaggageClaim className="h-2.5 w-3 lg:h-3 lg:w-3.5" />
          <span className="text-xxs capitalize lg:text-sm">1-3 Years</span>
        </span>
        <span className="hidden h-full w-0.5 bg-gray-200 lg:inline-block"></span>
        <span className="flex items-center gap-2.5 border-r-2 border-gray-50">
          <CircleDollarSign className="h-2.5 w-3 lg:h-3 lg:w-3.5" />
          <span className="text-xxs capitalize lg:text-sm">
            ${job.remuneration_from}-{job.remuneration_to}
          </span>
        </span>
        <span className="hidden h-full w-0.5 bg-gray-200 lg:inline-block"></span>
        <span className="flex items-center gap-2.5 border-r-2 border-gray-50">
          <Users className="h-2.5 w-3 lg:h-3 lg:w-3.5" />
          <span className="text-xxs capitalize lg:text-sm">{job.applicants}</span>
        </span>
        <span className="hidden h-full w-0.5 bg-gray-200 lg:inline-block"></span>
        <span className="flex items-center gap-2.5">
          <Calendar className="h-2.5 w-3 lg:h-3 lg:w-3.5" />
          <span className="text-xxs capitalize lg:text-sm">
            {formatDate(job.updated || '') || formatDate(job.created || '')}
          </span>
        </span>
      </div>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex max-w-full flex-col gap-4 overflow-hidden"
          >
            <p className="h-20 max-w-full overflow-hidden whitespace-pre-wrap break-words text-sm text-gray-500">
              {job.description}
            </p>
            <span className=" border border-neutral-300"></span>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-1 gap-4 overflow-x-hidden">
                {job.skill_tags?.map((tag, index) => (
                  <Badge
                    key={tag}
                    text={tag}
                    color={getColorClasses(index)?.textColor}
                    bgColor={getColorClasses(index)?.bgColor}
                  />
                ))}
              </div>
              <Button onClick={(e) => e.stopPropagation()} variant={'primary'} asChild>
                <Link href={`/jobs/${job.id}`}>View Details</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
