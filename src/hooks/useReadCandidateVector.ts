import { readCandidateVector } from '@/lib/jobs-mixer';
import { useQuery } from '@tanstack/react-query';

export const READ_CANDIDATE_VECTOR_KEY = 'read-candidate-vector';
export function useReadCandidateVector(id: string) {
  return useQuery({
    queryKey: [READ_CANDIDATE_VECTOR_KEY],
    queryFn: () => readCandidateVector(id),
  });
}
