import { getUserProfile } from '@/lib/user';
import { UserProfile } from '@/types/types';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

export const GET_USER_PROFILE_KEY = 'userProfile';

export function useGetUserProfile(): UseQueryResult<UserProfile, Error> {
  return useQuery({
    queryKey: [GET_USER_PROFILE_KEY],
    queryFn: getUserProfile,
  });
}
