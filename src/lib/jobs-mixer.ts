'use server';

import { CandidateVector, Job } from '@/types/types';
import { DataService } from './data-service';

const NEURAL_API_BASE_URL = process.env.NEURAL_API_BASE_URL;
const JOBS_MIXER_URLS = {
  tailoredUserJobs: `${NEURAL_API_BASE_URL}/api/v1/mixer/jobs`,
  candidateVector: `${NEURAL_API_BASE_URL}/api/v1/mixer/vector`,
};

export async function tailoredUserJobs(candidateId: number): Promise<Job[]> {
  if (!candidateId) return {} as Job[];
  const data = await DataService.post<Job[]>(`${JOBS_MIXER_URLS.tailoredUserJobs}/${candidateId}`, {
    collection_name: process.env.JOBS_COLLECTION_NAME,
    with_payload: true,
    with_vectors: false,
    min_score: process.env.JOBS_MIN_SCORE,
    skip: 0,
    limit: 5,
  });
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
