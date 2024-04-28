'use server';
import { MissingCandidates, User } from '@/types/types';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const USER_URLS = {
  singleUser: `${PLATFORM_API_BASE_URL}/api/v1/users`,
  missingCandidates: `${PLATFORM_API_BASE_URL}/api/v1/users/missing-coordinates`,
};

// TODO: make query params dynamic and easier to use in future

export async function getUserByEmail(userEmail: string): Promise<{ id: number }> {
  if (!userEmail) {
    // can return 404 heres
    return {} as { id: number };
  }
  const data = await DataService.get<{ id: number }>(`${USER_URLS.singleUser}/${userEmail}`, {
    skip: '0',
    limit: '10',
    allow_for_translated_jobs: 'false',
  });
  return data;
}
export async function getUserById(userId: string): Promise<User> {
  if (!userId) {
    // can return 404 heres
    return {} as User;
  }
  const data = await DataService.get<User>(`${USER_URLS.singleUser}/${userId}`, {
    skip: '0',
    limit: '10',
    allow_for_translated_jobs: 'false',
  });
  return data;
}
export async function getMissingCandidates(): Promise<MissingCandidates> {
  const data = await DataService.get<MissingCandidates>(`${USER_URLS.missingCandidates}`, {
    skip: '0',
    limit: '10',
    allow_for_translated_jobs: 'false',
  });
  return data;
}
