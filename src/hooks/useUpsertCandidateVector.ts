import { UpsertCandidateVectorProps, upsertCandidateVector } from '@/lib/jobs-mixer';
import { useMutation } from '@tanstack/react-query';

export const UPSERT_CANDIDATE_VECTOR_KEY = 'tailored-users-key';
export function useUpsertCandidateVector() {
  return useMutation({
    mutationKey: [UPSERT_CANDIDATE_VECTOR_KEY],
    mutationFn: ({ candidateId, body }: UpsertCandidateVectorProps) =>
      upsertCandidateVector({ candidateId, body }),
  });
}
