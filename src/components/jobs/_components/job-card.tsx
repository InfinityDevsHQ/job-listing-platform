'use client';
import Badges from '@/components/ui/badges';
import { Button } from '@/components/ui/button-new';
import { JobProps } from '@/types/types';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BaggageClaim,
  Bookmark,
  Calendar,
  CircleDollarSign,
  Clock,
  Flame,
  Locate,
  Users,
} from 'lucide-react';
import { useState } from 'react';

export default function JobCard({ job }: JobProps) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className="flex flex-col gap-4 rounded-md border border-gray-200 bg-white p-4 lg:p-8"
      onClick={() => setIsOpened(!isOpened)}
    >
      <header className="flex cursor-pointer items-center">
        <span
          className={`mr-5 flex items-center justify-center rounded-full p-2.5 lg:p-3 ${job.is_hot ? 'bg-accent-3' : ' bg-primary-500/30'}`}
        >
          <Flame className={`h-4 w-4 ${job.is_hot ? 'text-accent-2' : 'text-primary-500'}`} />
        </span>
        <div className="flex flex-1 flex-col">
          <h3 className="text-base font-semibold">{job.title}</h3>
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-gray-500">Semrush</span>
            <span className="bg-accent-1 flex items-center justify-center  rounded-md px-2 py-1 text-xxs font-semibold text-white shadow-md">
              Urgent
            </span>
          </div>
        </div>
        <Button className="rounded-md" variant={'outline'}>
          <Bookmark className="fill-gray-200 text-gray-200" />
        </Button>
      </header>
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
          <span className="text-xxs capitalize lg:text-sm">{job.updated || job.created}</span>
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
