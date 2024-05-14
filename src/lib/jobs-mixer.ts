'user server';

import { CandidateVector } from '@/types/types';
import { DataService } from './data-service';

const NEURAL_API_BASE_URL = process.env.NEURAL_API_BASE_URL;
const JOBS_MIXER_URLS = {
  tailoredUserJobs: `${NEURAL_API_BASE_URL}/api/v1/mixer/jobs`,
  candidateVector: `${NEURAL_API_BASE_URL}/api/v1/mixer/vector`,
};

export async function tailoredUserJobs(candidateId: string): Promise<[{}]> {
  if (!candidateId) return {} as [{}];
  const data = await DataService.post<[{}]>(`${JOBS_MIXER_URLS.tailoredUserJobs}/${candidateId}`);
  return data;
}
export async function readCandidateVector(candidateId: string): Promise<CandidateVector> {
  if (candidateId) return {} as CandidateVector;
  const data = await DataService.get<CandidateVector>(
    `${JOBS_MIXER_URLS.candidateVector}/${candidateId}`
  );
  return data;
}
type UpsertCandidateVectorBody = {
  text: string;
};
export type UpsertCandidateVectorProps = {
  candidateId: string;
  body: UpsertCandidateVectorBody;
};

export async function upsertCandidateVector({
  candidateId,
  body,
}: UpsertCandidateVectorProps): Promise<CandidateVector> {
  if (candidateId) return {} as CandidateVector;
  const data = await DataService.post<CandidateVector>(
    `${JOBS_MIXER_URLS.candidateVector}/${candidateId}`,
    body
  );
  return data;
}
