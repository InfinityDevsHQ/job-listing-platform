'use client';
import { useGetJobs } from '@/app/utils/rq/hooks/use-jobs';

import { cn } from '@/lib/utils';
import { RefreshCcwIcon } from 'lucide-react';
import { JobCardSkeleton } from '../skeleton/job-card-skeleton';
import { Button } from '../ui/button-new';
import JobCard from './_components/job-card';

const JobsList = () => {
  const { fetchNextPage, data, hasNextPage, isFetchingNextPage, isFetching } = useGetJobs(false);

  const jobs = data?.pages.flat() || [];
  const onClickLoadMore = () => {
    fetchNextPage();
  };

  if (isFetching && !isFetchingNextPage) {
    return <JobCardSkeleton />;
  }

  if (!jobs.length) {
    return <h3 className="mt-2 text-center text-sm font-semibold text-gray-900">No Jobs found</h3>;
  }

  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <JobCardSkeleton />
      {jobs?.map((job, index) => <JobCard key={index} job={job} />)}
      {hasNextPage && (
        <>
          <div className="hidden items-center justify-between bg-primary-600 p-8 lg:flex">
            <h4 className="font-bold capitalize text-white lg:text-2xl">
              There are thousands of jobs waiting for you
            </h4>
            <Button variant={'outline'} onClick={onClickLoadMore} disabled={isFetchingNextPage}>
              Load More
              <RefreshCcwIcon
                className={cn('ml-2 h-4 w-4', {
                  'animate-spin': isFetchingNextPage,
                })}
              />
            </Button>
          </div>
          <Button
            variant={'primary'}
            onClick={onClickLoadMore}
            disabled={isFetchingNextPage}
            className="lg:hidden"
          >
            Load More
            <RefreshCcwIcon
              className={cn('ml-2 h-4 w-4', {
                'animate-spin': isFetchingNextPage,
              })}
            />
          </Button>
        </>
      )}
    </div>
  );
};

export default JobsList;
