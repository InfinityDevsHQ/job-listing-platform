'use server';
import { DataService } from './data-service';
const NEURAL_API_BASE_URL = process.env.NEURAL_API_BASE_URL;

const CANDIDATES_URLS = {
  singleCandidate: `${NEURAL_API_BASE_URL}/api/v1/candidates/user`,
};

// TODO: make query params dynamic and easier to use in future

export async function getCandidateByUserId(userId: string): Promise<{}> {
  if (!userId) {
    // can return 404 heres
    return {} as {};
  }
  const data = await DataService.get<{}>(`${CANDIDATES_URLS.singleCandidate}/${userId}`, {
    skip: '0',
    limit: '10',
    allow_for_translated_jobs: 'false',
  });
  return data;
}
export async function getCandidateByCandidateId(candidateId: string): Promise<{}> {
  if (!candidateId) {
    // can return 404 heres
    return {} as {};
  }
  const data = await DataService.get<{}>(`${CANDIDATES_URLS.singleCandidate}/${candidateId}`, {
    skip: '0',
    limit: '10',
    allow_for_translated_jobs: 'false',
  });
  return data;
}
