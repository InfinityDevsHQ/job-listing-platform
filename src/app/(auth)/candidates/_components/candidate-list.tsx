'use client';

import { useAllCandidates } from '@/app/utils/rq/hooks/use-all-candidates';
import CandidateCard from './candidate-card';

export default function CandidateList() {
  const { data: candidates } = useAllCandidates();
  return (
    <div className="grid  justify-items-center gap-4 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3">
      {candidates?.map((candidate, index) => (
        <CandidateCard key={index} candidateData={candidate} />
      ))}
    </div>
  );
}
