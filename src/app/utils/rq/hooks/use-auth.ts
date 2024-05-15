import { getUserProfile } from '@/lib/user';
import { useQuery } from '@tanstack/react-query';
import { getQueryClient } from '../react-query-client';

export const USER_PROFILE = 'user-profile';
export const JOB_BY_ID = 'JOB_BY_ID';

export function usePrefetchUserProfile() {
  const queryClient = getQueryClient();

  return queryClient.prefetchQuery({
    retry: 0,
    queryKey: [USER_PROFILE],
    queryFn: () => getUserProfile(),
  });
}

export function useUserProfile() {
  return useQuery({
    queryKey: [USER_PROFILE],
    queryFn: async () => await getUserProfile(),
  });
}
