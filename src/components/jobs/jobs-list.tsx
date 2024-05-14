'use client';
import { useGetHotJobs } from '@/app/utils/rq/hooks/jobs-hook';
import { cn } from '@/lib/utils';
import { JobListProps } from '@/types/types';
import { RefreshCcwIcon } from 'lucide-react';
import { Button } from '../ui/button-new';
import JobCard from './_components/job-card';

const JobsList = ({ hotJobsAll, similarJobId, allJobs }: JobListProps) => {
  const { fetchNextPage, data, hasNextPage, isFetchingNextPage } = useGetHotJobs();
  const hotJobs = data?.pages.flat() || [];

  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      {hotJobsAll && hotJobs?.map((job, index) => <JobCard key={index} job={job} />)}
      {/* {similarJobId && similarJobsData?.map((job, index) => <JobCard key={index} job={job} />)} */}
      {hasNextPage && (
        <div className="flex items-center justify-center">
          <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            LoadMore
            <RefreshCcwIcon
              className={cn('ml-2 h-4 w-4', { 'animate-spin': isFetchingNextPage })}
            />
          </Button>
        </div>
      )}
    </div>
  );
};

export default JobsList;
