import { getUserProfile } from '@/lib/user';
import { User } from '@/types/types';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export const GET_USER_PROFILE_KEY = 'userProfile';

export function useGetUserProfile(): UseQueryResult<User, Error> {
  return useQuery({
    queryKey: [GET_USER_PROFILE_KEY],
    queryFn: getUserProfile,
  });
}
