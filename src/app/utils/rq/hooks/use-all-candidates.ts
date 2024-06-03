import { getAllCandidates } from '@/lib/candidates';
import { useQuery } from '@tanstack/react-query';
export const GET_ALL_CANDIDATES_KEY = 'get-all-candidates';

export function useAllCandidates() {
  return useQuery({
    queryKey: [GET_ALL_CANDIDATES_KEY],
    queryFn: getAllCandidates,
  });
}
