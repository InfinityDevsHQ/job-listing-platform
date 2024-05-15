'use client';
import { useAllJobs } from '@/hooks/useAllJobs';
import { useGetHotJobs } from '@/hooks/useGetHotJobs';
import { useSimilarJobs } from '@/hooks/useSimilarJobs';
import { cn } from '@/lib/utils';
import { RefreshCcwIcon } from 'lucide-react';
import { useEffect } from 'react';
import { Button } from '../ui/button-new';
import { Skeleton } from '../ui/skeleton';
import JobCard from './_components/job-card';
type JobListProps = {
  hotJobsAll?: boolean;
  similarJobId?: string;
  allJobs?: boolean;
};
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
  const {
    mutate: fetchSimilarJobs,
    isPending: similarJobsLoading,
    error: similarJobsEError,
    data: similarJobsList,
  } = useSimilarJobs();
  const allJobsList = allJobsData?.pages.flat() || [];
  useEffect(() => {
    if (similarJobId) {
      fetchSimilarJobs(similarJobId as string);
    }
  }, [similarJobId]);
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      {hotJobsAll && hotJobs?.map((job, index) => <JobCard key={index} job={job} />)}
      {allJobs && allJobsList.map((job, index) => <JobCard key={index} job={job} />)}
      {/* TODO: Replace component with new one */}
      {similarJobId &&
        similarJobsList?.result.map((job, index) => <JobCard key={index} job={job} />)}

      {/* Button to fetch more hot jobs */}
      {hotJobsAll && hasNextHotJobsPage && (
        <div className="flex items-center justify-center">
          <Button onClick={() => fetchNextHotJobs()} disabled={isFetchingNextHotJobsPage}>
            LoadMore
            <RefreshCcwIcon
              className={cn('ml-2 h-4 w-4', { 'animate-spin': isFetchingNextHotJobsPage })}
            />
          </Button>
        </div>
      )}
      {/* Button to fetch more jobs */}
      {allJobs && hasNextAllJobsPage && (
        <div className="flex items-center justify-center">
          <Button onClick={() => fetchNextJobs()} disabled={isFetchingNextAllJobsPage}>
            LoadMore
            <RefreshCcwIcon
              className={cn('ml-2 h-4 w-4', { 'animate-spin': isFetchingNextAllJobsPage })}
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
