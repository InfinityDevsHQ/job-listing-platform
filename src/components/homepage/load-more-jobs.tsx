'use client';
import { getJobs } from '@/lib/jobs';
import { cn } from '@/lib/utils';
import { Job } from '@/types/types';
import { RefreshCcwIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Button } from '../ui/button-new';
type LoadMoreProps = {
  previousJobs: Job[];
};
const LoadMoreJobs = ({ previousJobs }: LoadMoreProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [jobsEnded, setJobsEnded] = useState(false);
  useEffect(() => {
    if (previousJobs.length < 10) {
      setJobsEnded(true);
    }
  }, [previousJobs]);
  async function loadMore() {
    setIsLoading(true);
    try {
      const newJobs = await getJobs({ is_hot: false, skip: previousJobs.length, limit: 25 });
      if (!newJobs || newJobs.length === 0) {
        setJobsEnded(true);
        toast.info('No more jobs to load');
      }
      previousJobs.push(...newJobs);
    } catch {
      console.error('Failed To Load More jobs');
      toast.error('Failed to lod more jobs');
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Button disabled={jobsEnded} onClick={loadMore}>
      Load More
      <RefreshCcwIcon className={cn('ml-2 h-4 w-4', { 'animate-spin': isLoading })} />
    </Button>
  );
};
export default LoadMoreJobs;
