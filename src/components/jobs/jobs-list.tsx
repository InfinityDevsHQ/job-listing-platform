'use client';
import { useGetHotJobs } from '@/app/utils/rq/hooks/jobs-hook';
import { useAllJobs } from '@/hooks/useAllJobs';
import { cn } from '@/lib/utils';
import { JobListProps } from '@/types/types';
import { RefreshCcwIcon } from 'lucide-react';
import { Button } from '../ui/button-new';
import JobCard from './_components/job-card';

const JobsList = ({ hotJobsAll, similarJobId, allJobs }: JobListProps) => {
  const {
    fetchNextPage: fetchNextHotJobs,
    data: hotJobsFiltered,
    hasNextPage: hasNextHotJobsPage,
    isFetchingNextPage: isFetchingNextHotJobsPage,
  } = useGetHotJobs();
  const hotJobs = hotJobsFiltered?.pages.flat() || [];

  const {
    fetchNextPage: fetchNextJobs,
    data: allJobsData,
    hasNextPage: hasNextAllJobsPage,
    isFetchingNextPage: isFetchingNextAllJobsPage,
  } = useAllJobs();
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      {hotJobsAll && hotJobs?.map((job, index) => <JobCard key={index} job={job} />)}
      {/* {similarJobId && similarJobsData?.map((job, index) => <JobCard key={index} job={job} />)} */}
      {hasNextHotJobsPage && (
        <div className="flex items-center justify-center">
          <Button onClick={() => fetchNextHotJobs()} disabled={isFetchingNextHotJobsPage}>
            LoadMore
            <RefreshCcwIcon
              className={cn('ml-2 h-4 w-4', { 'animate-spin': isFetchingNextHotJobsPage })}
            />
          </Button>
        </div>
      )}
    </div>
  );
};

export default JobsList;
