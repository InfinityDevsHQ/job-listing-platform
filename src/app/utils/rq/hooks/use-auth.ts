import { getUserProfile } from '@/lib/user';
import { UserProfile } from '@/types/types';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getQueryClient } from '../react-query-client';

export const USER_PROFILE = 'user-profile';

export function usePrefetchUserProfile() {
  const queryClient = getQueryClient();
  return queryClient.prefetchQuery({
    retry: 0,
    queryKey: [USER_PROFILE],
    queryFn: getUserProfile,
  });
}

export function useUserProfile(): UseQueryResult<UserProfile, Error> {
  return useQuery({
    queryKey: [USER_PROFILE],
    queryFn: getUserProfile,
  });
}
