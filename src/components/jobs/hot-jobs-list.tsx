'use client';
import { useGetJobs } from '@/app/utils/rq/hooks/use-jobs';

import { cn } from '@/lib/utils';
import { RefreshCcwIcon } from 'lucide-react';
import { JobCardSkeleton } from '../skeleton/job-card-skeleton';
import { Button } from '../ui/button-new';
import JobCard from './_components/job-card';

const HotJobs = () => {
  const { fetchNextPage, data, hasNextPage, isFetchingNextPage, isFetching } = useGetJobs(true);

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
      {jobs?.map((job, index) => <JobCard key={index} job={job} />)}
      {hasNextPage && (
        <div className="flex items-center justify-end">
          <Button onClick={onClickLoadMore} disabled={isFetchingNextPage} variant={'primary'}>
            Load More
            <RefreshCcwIcon
              className={cn('ml-2 h-4 w-4', {
                'animate-spin': isFetchingNextPage,
              })}
            />
          </Button>
        </div>
      )}
    </div>
  );
};

export default HotJobs;
