import { getJobs } from '@/lib/jobs';
import { useInfiniteQuery } from '@tanstack/react-query';
export const ALL_JOBS_KEY = 'allJobs';
export function useAllJobs() {
  return useInfiniteQuery({
    initialPageParam: 0,
    retry: 1,
    queryKey: [ALL_JOBS_KEY],
    queryFn: ({ pageParam }) => getJobs({ is_hot: false, skip: pageParam, limit: 10 }),
    getNextPageParam: ({ lastPageParam }) => {
      return lastPageParam.length + 1;
    },
  });
}
