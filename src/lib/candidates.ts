'use server';
import { CandidateRawData, User, UserSettings } from '@/types/types';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const CANDIDATES_URLS = {
  singleCandidate: `${PLATFORM_API_BASE_URL}/api/v1/candidates/user`,
  singleCandidateSettings: `${PLATFORM_API_BASE_URL}/api/v1/candidates/settings`,
  singleCandidateInfo: `${PLATFORM_API_BASE_URL}/api/v1/candidates/user_info`,
  singleCandidateRawData: `${PLATFORM_API_BASE_URL}/api/v1/candidates/raw_data`,
  singleCandidateRecommendations: `${PLATFORM_API_BASE_URL}/api/v1/candidates/recommendation/{candidate_id}`,
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

export async function getCandidateSettingsByCandidateId(
  candidateId: string
): Promise<UserSettings> {
  if (!candidateId) {
    // can return 404 heres
    return {} as UserSettings;
  }
  const data = await DataService.get<UserSettings>(
    `${CANDIDATES_URLS.singleCandidateSettings}/${candidateId}`,
    {
      skip: '0',
      limit: '10',
      allow_for_translated_jobs: 'false',
    }
  );
  return data;
}

export async function getUserInfoByCandidateId(candidateId: string): Promise<User> {
  if (!candidateId) {
    // can return 404 heres
    return {} as User;
  }
  const data = await DataService.get<User>(
    `${CANDIDATES_URLS.singleCandidateInfo}/${candidateId}`,
    {
      skip: '0',
      limit: '10',
      allow_for_translated_jobs: 'false',
    }
  );
  return data;
}
export async function getCandidateRawDataByCandidateId(
  candidateId: string
): Promise<CandidateRawData> {
  if (!candidateId) {
    // can return 404 heres
    return {} as CandidateRawData;
  }
  const data = await DataService.get<CandidateRawData>(
    `${CANDIDATES_URLS.singleCandidateRawData}/${candidateId}`,
    {
      skip: '0',
      limit: '10',
      allow_for_translated_jobs: 'false',
    }
  );
  return data;
}
export async function getCandidateRecommendationsByCandidateId(candidateId: string): Promise<{}> {
  if (!candidateId) {
    // can return 404 heres
    return {} as {};
  }
  const data = await DataService.get<{}>(
    `${CANDIDATES_URLS.singleCandidateRecommendations}/${candidateId}`,
    {
      skip: '0',
      limit: '10',
      allow_for_translated_jobs: 'false',
    }
  );
  return data;
}
