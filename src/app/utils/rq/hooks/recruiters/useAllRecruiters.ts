import { getRecruiters } from '@/lib/recruiters';
import { Recruiter } from '@/types/types';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';

export const GET_ALL_RECRUITERS = 'all-recruiters';
export async function useAllRecruiters() {
  return useInfiniteQuery<Recruiter[], Error, InfiniteData<Recruiter[], number>, any, number>({
    initialPageParam: 0,
    retry: 0,
    queryKey: [GET_ALL_RECRUITERS],
    queryFn: ({ pageParam }) =>
      getRecruiters({
        skip: pageParam,
      }),
    getNextPageParam: (lastPageParam) => {
      return lastPageParam.length + 1;
    },
  });
}
