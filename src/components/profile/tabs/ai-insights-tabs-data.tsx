import { useCandidateRecommendationById } from '@/app/utils/rq/hooks/use-candidate-recommendation';
import InfoSection from '@/components/ui/info-section';

const AiInsightsTabsData = async ({ candidateId }: { candidateId: number }) => {
  const { isLoading, error, data: recommendation } = useCandidateRecommendationById(candidateId);

  console.log('recommendation =====>', recommendation);

  if (isLoading || !recommendation || !Object.keys(recommendation).length) {
    return <></>;
  }

  return (
    <>
      <InfoSection heading="Job Market Insights">
        <p className="text-gray-500">{recommendation.job_market_insights?.text}</p>
      </InfoSection>
      <InfoSection heading="CV Optimization Suggestions">
        <p className="text-gray-500">{recommendation.cv_optimization_suggestions?.text}</p>
      </InfoSection>
      <InfoSection heading="Skill Gap Analysis">
        <p className="text-gray-500">{recommendation.skill_gap_analysis?.text}</p>
      </InfoSection>
      <InfoSection heading="Certification Suggestions">
        <p className="text-gray-500">{recommendation.certification_suggestions?.text}</p>
      </InfoSection>
      <InfoSection heading="Personal Branding">
        <p className="text-gray-500">{recommendation.personal_branding?.text}</p>
      </InfoSection>
      <InfoSection heading="Career Advice">
        <p className="text-gray-500">{recommendation.career_advice?.text}</p>
      </InfoSection>
    </>
  );
};
export default AiInsightsTabsData;
