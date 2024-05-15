import { getJobById, getJobs } from '@/lib/jobs';
import { Job } from '@/types/types';
import { InfiniteData, QueryClient, useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getQueryClient } from '../react-query-client';

export const ALL_JOBS_KEY = 'all-jobs';
export const JOB_BY_ID = 'JOB_BY_ID';

export function useGetJobs(isHot = false) {
  const payload = {
    is_hot: isHot,
  };
  return useInfiniteQuery<Job[], Error, InfiniteData<Job[], number>, any, number>({
    initialPageParam: 0,
    retry: 0,
    queryKey: [ALL_JOBS_KEY, payload],
    queryFn: ({ pageParam }) => getJobs({ skip: pageParam, is_hot: isHot }),
    getNextPageParam: (lastPageParam) => {
      return lastPageParam.length + 1;
    },
  });
}

export async function useGetJobsPrefetch(isHot = false): Promise<QueryClient> {
  const queryClient = getQueryClient();
  const payload = {
    is_hot: isHot,
  };
  await queryClient.prefetchInfiniteQuery<Job[], Error, InfiniteData<Job[], number>, any, number>({
    initialPageParam: 0,
    retry: 0,
    queryKey: [ALL_JOBS_KEY, payload],
    queryFn: () => getJobs({ skip: 0, is_hot: isHot }),
  });
  return queryClient;
}

export function useJobListingById({ jobId }: { jobId: string }) {
  return useQuery({
    queryKey: [JOB_BY_ID, jobId],
    queryFn: async () => await getJobById(jobId),
  });
}
