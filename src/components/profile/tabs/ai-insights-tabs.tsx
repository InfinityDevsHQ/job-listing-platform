import { GET_CANDIDATE_RECOMMENDATION_BY_ID_KEY } from '@/app/utils/rq/hooks/use-candidate-recommendation';
import { getQueryClient } from '@/app/utils/rq/react-query-client';
import { ReactQueryHydrate } from '@/app/utils/rq/react-query-hydrate';
import { TabsContent } from '@/components/ui/tabs';
import { getCandidateRecommendationById } from '@/lib/candidates';
import { dehydrate } from '@tanstack/react-query';
import AiInsightsTabsData from './ai-insights-tabs-data';

const AiInsightsTabs = async ({ candidateId }: { candidateId: number }) => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [GET_CANDIDATE_RECOMMENDATION_BY_ID_KEY],
    queryFn: () => getCandidateRecommendationById(candidateId),
  });

  return (
    <TabsContent value="ai-insights" className="-mt-4 flex flex-col gap-5">
      <ReactQueryHydrate state={dehydrate(queryClient)}>
        <AiInsightsTabsData candidateId={candidateId} />
      </ReactQueryHydrate>
    </TabsContent>
  );
};
export default AiInsightsTabs;
