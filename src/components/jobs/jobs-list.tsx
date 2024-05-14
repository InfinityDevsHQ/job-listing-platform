'use client';
import { useGetJobs } from '@/app/utils/rq/hooks/use-jobs';

import { cn } from '@/lib/utils';
import { RefreshCcwIcon } from 'lucide-react';
import { Button } from '../ui/button-new';
import { Skeleton } from '../ui/skeleton';
import JobCard from './_components/job-card';

export interface JobListProps {
  similarJobs?: string;
  hot?: boolean;
}

const JobsList = ({ hot }: JobListProps) => {
  const {
    fetchNextPage: fetchNextHotJobs,
    data: hotJobsFiltered,
    hasNextPage: hasNextHotJobsPage,
    isFetchingNextPage: isFetchingNextHotJobsPage,
    isFetching: isFetchingHotJobs,
  } = useGetJobs(true);

  const {
    fetchNextPage,
    data: allJobs,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useGetJobs(false);

  const jobs = hot ? hotJobsFiltered?.pages.flat() || [] : allJobs?.pages.flat() || [];
  //
  const onClickLoadMore = () => {
    if (hot) {
      fetchNextHotJobs();
    } else {
      fetchNextPage();
    }
  };

  if (isFetching || (isFetchingHotJobs && !(isFetchingNextHotJobsPage || isFetchingNextPage))) {
    return <Loader />;
  }

  if (!jobs.length) {
    return <h3 className="mt-2 text-center text-sm font-semibold text-gray-900">No Jobs found</h3>;
  }

  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      {jobs?.map((job, index) => <JobCard key={index} job={job} />)}
      {hot && hasNextHotJobsPage && (
        <div className="flex items-center justify-center">
          <Button
            onClick={onClickLoadMore}
            disabled={hot ? isFetchingNextHotJobsPage : isFetchingNextPage}
          >
            Load More
            <RefreshCcwIcon
              className={cn('ml-2 h-4 w-4', {
                'animate-spin': hot ? isFetchingNextHotJobsPage : isFetchingNextPage,
              })}
            />
          </Button>
        </div>
      )}
    </div>
  );
};

const Loader = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <div className="relative flex transform flex-col gap-4 rounded-2xl bg-gray-100 p-4 shadow">
        <div className="flex items-center gap-4">
          <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-gray-200 md:flex"></div>
          <div className="flex flex-col gap-2">
            <h3 className="flex items-center gap-4 pr-5 text-lg md:pr-0">
              <Skeleton className="h-5 w-20 bg-gray-200" />
            </h3>
            <div className="flex w-full flex-col gap-4 lg:flex-row">
              <div className="flex w-full flex-wrap items-center gap-3">
                <Skeleton className={cn('h-4 w-24 bg-gray-200')} />
                <svg viewBox="0 0 2 2" className="h-1 w-1 fill-current text-gray-200">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <Skeleton className={cn('h-4 w-14 bg-gray-200')} />
                <svg viewBox="0 0 2 2" className="h-1 w-1 fill-current text-gray-200">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <Skeleton className={cn('h-4 w-20 bg-gray-200')} />
                <svg viewBox="0 0 2 2" className="h-1 w-1 fill-current text-gray-200">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <Skeleton className={cn('h-4 w-16 bg-gray-200')} />
                <svg viewBox="0 0 2 2" className="h-1 w-1 fill-current text-gray-200">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <Skeleton className={cn('h-4 w-20 bg-gray-200')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsList;
