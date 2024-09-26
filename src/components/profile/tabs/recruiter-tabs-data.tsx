'use client';
import { useCandidateRecommendationById } from '@/app/utils/rq/hooks/use-candidate-recommendation';
import InfoSection from '@/components/ui/info-section';

export default function RecruiterTabsData({ candidateId }: { candidateId: number }) {
  const { isLoading, error, data: recommendation } = useCandidateRecommendationById(candidateId);
  if (isLoading || !recommendation || !Object.keys(recommendation).length) {
    return <></>;
  }
  return (
    <>
      <InfoSection heading="Overall Assessment">
        <p className="text-dark-name">{recommendation?.overall_assessment?.text}</p>
      </InfoSection>
      <InfoSection heading="Career Achievements">
        <p className="text-dark-name">{recommendation?.career_achievements?.text}</p>
      </InfoSection>
    </>
  );
}
