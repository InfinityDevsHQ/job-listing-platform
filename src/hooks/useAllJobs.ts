import { getJobs } from '@/lib/jobs';
import { useCountryStore } from '@/stores/countryStore/countryStore';
import { Job } from '@/types/types';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';

export const ALL_JOBS_KEY = 'allJobs';

export function useAllJobs() {
  return useInfiniteQuery<Job[], Error, InfiniteData<Job[], number>, any, number>({
    initialPageParam: 0,
    retry: 1,
    queryKey: [ALL_JOBS_KEY],
    queryFn: ({ pageParam }) =>
      getJobs({
        is_hot: false,
        skip: pageParam,
        limit: 10,
        country: useCountryStore.getState().selectedCountry.name,
      }),
    getNextPageParam: (lastPageParam) => {
      return lastPageParam.length + 1;
    },
  });
}
