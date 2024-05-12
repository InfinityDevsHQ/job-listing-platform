'use server';
import { User, UserBody } from '@/types/types';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const USER_URLS = {
  user: `${PLATFORM_API_BASE_URL}/api/v1/user`,
  userProfile: `${PLATFORM_API_BASE_URL}/api/v1/user/profile`,
  userInbox: `${PLATFORM_API_BASE_URL}/api/v1/slugify/entity/slug`,
  userNotifications: `${PLATFORM_API_BASE_URL}/api/v1/slugify/entity/slug`,
  userJobsAppliedFor: `${PLATFORM_API_BASE_URL}/api/v1/user/notifications`,
  userJobsClicked: `${PLATFORM_API_BASE_URL}/api/v1/user/jobs/clicked`,
  userJobsFavorited: `${PLATFORM_API_BASE_URL}/api/v1/user/jobs/favorited`,
  userJobsDisabled: `${PLATFORM_API_BASE_URL}/api/v1/user/jobs/disliked`,
  userUpdate: `${PLATFORM_API_BASE_URL}/api/v1/user`,
};

export const getUser = (): Promise<User> => DataService.get<User>(USER_URLS.user);

export async function getUserProfile(): Promise<{}> {
  const data = await DataService.get<{}>(`${USER_URLS.userProfile}`);
  return data;
}
export async function getUserInbox(): Promise<{}> {
  const data = await DataService.get<{}>(`${USER_URLS.userInbox}`);
  return data;
}

export async function getUserNotifications(): Promise<{}> {
  const data = await DataService.get<{}>(`${USER_URLS.userNotifications}`);
  return data;
}
export async function getUserJobsAppliedFor(): Promise<{}> {
  const data = await DataService.get<{}>(`${USER_URLS.userJobsAppliedFor}`);
  return data;
}
export async function getUserJobsClicked(): Promise<{}> {
  const data = await DataService.get<{}>(`${USER_URLS.userJobsClicked}`);
  return data;
}
export async function getUserJobsFavorited(): Promise<{}> {
  const data = await DataService.get<{}>(`${USER_URLS.userJobsFavorited}`);
  return data;
}
export async function getUserJobsDisabled(): Promise<{}> {
  const data = await DataService.get<{}>(`${USER_URLS.userJobsDisabled}`);
  return data;
}
export async function updateUser(body: UserBody) {
  const data = await DataService.put<UserBody>(USER_URLS.userUpdate, body);
  return data;
}
