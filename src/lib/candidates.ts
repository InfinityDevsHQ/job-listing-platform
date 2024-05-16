'use server';
import { CandidateRawData, RecommendationsProps, User, UserSettings } from '@/types/types';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const CANDIDATES_URLS = {
  singleCandidate: `${PLATFORM_API_BASE_URL}/api/v1/candidates/user`,
  singleCandidateSettings: `${PLATFORM_API_BASE_URL}/api/v1/candidates/settings`,
  candidateInfo: `${PLATFORM_API_BASE_URL}/api/v1/candidates/user_info`,
  candidateRawData: `${PLATFORM_API_BASE_URL}/api/v1/candidates/raw_data`,
  candidateRecommendations: `${PLATFORM_API_BASE_URL}/api/v1/candidates/recommendation/{candidate_id}`,
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
export async function getCandidateById(candidateId: string): Promise<{}> {
  if (!candidateId) {
    // can return 404 heres
    return {} as {};
  }
  const data = await DataService.get<{}>(`${CANDIDATES_URLS.singleCandidate}/${candidateId}`);
  return data;
}

export async function getCandidateSettingsById(candidateId: string): Promise<UserSettings> {
  if (!candidateId) {
    // can return 404 heres
    return {} as UserSettings;
  }
  const data = await DataService.get<UserSettings>(
    `${CANDIDATES_URLS.singleCandidateSettings}/${candidateId}`
  );
  return data;
}
export async function getUserInfoByCandidateId(candidateId: string): Promise<User> {
  if (!candidateId) {
    // can return 404 heres
    return {} as User;
  }
  const data = await DataService.get<User>(`${CANDIDATES_URLS.candidateInfo}/${candidateId}`);
  return data;
}
export async function getCandidateRawDataById(candidateId: string): Promise<CandidateRawData> {
  if (!candidateId) {
    // can return 404 heres
    return {} as CandidateRawData;
  }
  const data = await DataService.get<CandidateRawData>(
    `${CANDIDATES_URLS.candidateRawData}/${candidateId}`
  );
  return data;
}
export async function getCandidateRecommendationsById(
  candidateId: number | string
): Promise<RecommendationsProps> {
  if (!candidateId) {
    // can return 404 heres
    return {} as RecommendationsProps;
  }
  const data = await DataService.get<RecommendationsProps>(
    `${CANDIDATES_URLS.candidateRecommendations}/${candidateId}`
  );

  console.log('DATA from API =================> : ', data);
  return data;
}
