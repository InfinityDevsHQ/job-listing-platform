'use client';
import Badges from '@/components/ui/badges';
import { Button } from '@/components/ui/button-new';
import { JobProps } from '@/types/types';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

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
      <JobCardHeader job={job} handleClick={() => setIsOpened(!isOpened)} />
      <AnimatePresence>
        {isOpened && job?.id && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {job?.description && (
              <p className="border-b border-gray-300 pb-4 text-sm text-neutral-600 lg:text-base">
                {job?.description}
              </p>
            )}
            <div className="flex flex-col gap-3 pt-4 md:flex-row md:items-center md:justify-between">
              <Badges badges={job?.skill_tags?.map((tag) => ({ text: tag }))} />
              <span className="border-b border-gray-300 md:hidden" />
              <Button onClick={(e) => e.stopPropagation()} variant="primary" className="max-w-max">
                <Link href={`/jobs/${job.id}`} className="flex items-center">
                  More Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
