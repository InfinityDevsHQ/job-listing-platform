import { getUserProfile } from '@/lib/user';
import { UserProfile } from '@/types/types';
import { QueryClient, UseQueryResult, useQuery } from '@tanstack/react-query';

export const USER_PROFILE = 'user-profile';

export function usePrefetchUserProfile() {
  const queryClient = new QueryClient();
  return queryClient.prefetchQuery({
    retry: 0,
    queryKey: [USER_PROFILE],
    queryFn: () => getUserProfile(),
  });
}

export async function prefetchUserProfile(queryClient: QueryClient) {
  return await queryClient.prefetchQuery({
    retry: 0,
    queryKey: [USER_PROFILE],
    queryFn: () => getUserProfile(),
  });
}

export function useUserProfile(): UseQueryResult<UserProfile, Error> {
  return useQuery({
    queryKey: [USER_PROFILE],
    queryFn: () => getUserProfile(),
  });
}
