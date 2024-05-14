'use client';
import { useGetHotJobs } from '@/app/utils/rq/hooks/jobs-hook';
import { useAllJobs } from '@/hooks/useAllJobs';
import { useSimilarJobs } from '@/hooks/useSimilarJobs';
import { cn } from '@/lib/utils';
import { JobListProps } from '@/types/types';
import { RefreshCcwIcon } from 'lucide-react';
import { useEffect } from 'react';
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

export default JobsList;
