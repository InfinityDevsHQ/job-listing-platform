'user server';

import { DataService } from './data-service';

const NEURAL_API_BASE_URL = process.env.NEURAL_API_BASE_URL;
const JOBS_MIXER_URLS = {
  tailoredUserJobs: `${NEURAL_API_BASE_URL}/api/v1/mixer/jobs`,
  candidateVector: `${NEURAL_API_BASE_URL}/api/v1/mixer/vector`,
};

export async function tailoredUserJobs(candidateId: string) {
  const data = await DataService.post(`${JOBS_MIXER_URLS.tailoredUserJobs}/${candidateId}`);
  return data;
}
export async function readCandidateVector(candidateId: string) {
  const data = await DataService.get(`${JOBS_MIXER_URLS.candidateVector}/${candidateId}`);
  return data;
}
export async function upsertCandidateVector(candidateId: string) {
  const data = await DataService.post(`${JOBS_MIXER_URLS.candidateVector}/${candidateId}`);
  return data;
}
