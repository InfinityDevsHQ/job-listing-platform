import { getCandidateRecommendationById } from '@/lib/candidates';
import { useQuery } from '@tanstack/react-query';
export const GET_CANDIDATE_RECOMMENDATION_BY_ID_KEY = 'get-candidate-recommendation-by-id';

export function useCandidateRecommendationById(candidateId: number) {
  return useQuery({
    queryKey: [GET_CANDIDATE_RECOMMENDATION_BY_ID_KEY],
    queryFn: () => getCandidateRecommendationById(candidateId),
  });
}
