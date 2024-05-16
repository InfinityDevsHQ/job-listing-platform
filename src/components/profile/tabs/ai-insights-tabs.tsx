'use client';
import InfoSection from '@/components/ui/info-section';
import { TabsContent } from '@/components/ui/tabs';
import { RecommendationsProps } from '@/types/types';
import { useEffect } from 'react';

type AiInsightsTabsProps = { candidateRecommendations?: RecommendationsProps };

const AiInsightsTabs = ({ candidateId }: { candidateId: number | string }) => {
  useEffect(() => {
    // const recommendations = await getCandidateRecommendationsById(candidateId || '');
    console.log('recommendations ==>');
  }, []);

  return (
    <TabsContent value="ai-insights" className="-mt-4 flex flex-col gap-5">
      {/* {JSON.stringify(recommendations)} */}
      <InfoSection heading="Job Market Insights">
        {/* <p className="text-gray-500">{recommendations?.job_market_insights?.text}</p> */}
      </InfoSection>
      <InfoSection heading="CV Optimization Suggestions">
        {/* <p className="text-gray-500">{recommendations?.cv_optimization_suggestions?.text}</p> */}
      </InfoSection>
      <InfoSection heading="Skill Gap Analysis">
        {/* <p className="text-gray-500">{recommendations?.skill_gap_analysis?.text}</p> */}
      </InfoSection>
      <InfoSection heading="Certification Suggestions">
        {/* <p className="text-gray-500">{recommendations?.certification_suggestions?.text}</p> */}
      </InfoSection>
      <InfoSection heading="Personal Branding">
        {/* <p className="text-gray-500">{recommendations?.personal_branding?.text}</p> */}
      </InfoSection>
      <InfoSection heading="Career Advice">
        {/* <p className="text-gray-500">{recommendations?.career_advice?.text}</p> */}
      </InfoSection>
    </TabsContent>
  );
};
export default AiInsightsTabs;
