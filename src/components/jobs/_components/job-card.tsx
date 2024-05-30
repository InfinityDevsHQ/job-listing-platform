'use client';
import formatDate from '@/app/utils/common/format-date';
import Badges from '@/components/ui/badges';
import { JobProps } from '@/types/types';
import { AnimatePresence, motion } from 'framer-motion';
import { BaggageClaim, Calendar, CircleDollarSign, Clock, Locate, Users } from 'lucide-react';
import { useState } from 'react';
import JobCardHeader from './job-card-header';

export default function JobCard({ job }: JobProps) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className="flex w-screen flex-col gap-4 rounded-md border border-gray-200 bg-white p-4 sm:w-auto lg:p-8"
      onClick={() => setIsOpened(!isOpened)}
    >
      <JobCardHeader title={job.title || ''} is_hot={job.is_hot || false} company="Semrush" />
      <div className="grid grid-cols-3 items-center font-semibold text-neutral-900 lg:grid-cols-6">
        <span className="flex items-center gap-2.5">
          <Clock className="h-2.5 w-3 lg:h-3 lg:w-3.5" />
          <span className="text-xxs capitalize lg:text-sm">{job.employment_type}</span>
        </span>
        <span className="flex items-center gap-2.5">
          <BaggageClaim className="h-2.5 w-3 lg:h-3 lg:w-3.5" />
          <span className="text-xxs capitalize lg:text-sm">1-3 Years</span>
        </span>
        <span className="flex items-center gap-2.5">
          <Locate className="h-2.5 w-3 lg:h-3 lg:w-3.5" />
          <span className="text-xxs capitalize lg:text-sm">
            {job.city},{job.country}
          </span>
        </span>
        <span className="flex items-center gap-2.5">
          <CircleDollarSign className="h-2.5 w-3 lg:h-3 lg:w-3.5" />
          <span className="text-xxs capitalize lg:text-sm">
            ${job.remuneration_from}-{job.remuneration_to}
          </span>
        </span>
        <span className="flex items-center gap-2.5">
          <Users className="h-2.5 w-3 lg:h-3 lg:w-3.5" />
          <span className="text-xxs capitalize lg:text-sm">{job.applicants}</span>
        </span>
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
            className="flex flex-col gap-4 overflow-hidden"
          >
            <p className="text-sm text-gray-500">{job.description}</p>
            <span className=" border border-neutral-300"></span>
            <Badges badges={job?.skill_tags?.map((tag) => ({ text: tag }))} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
