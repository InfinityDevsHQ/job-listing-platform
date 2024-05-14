'use server';
import { SubscribeBody, Subscriber } from '@/types/types';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const NEWSLETTER_URLS = {
  allSubscribers: `${PLATFORM_API_BASE_URL}/api/v1/newsletter/subscribers`,
  subscribersCount: `${PLATFORM_API_BASE_URL}/api/v1/newsletter/subscribers/count`,
  subscribe: `${PLATFORM_API_BASE_URL}/api/v1/newsletter/subscribe`,
  unsubscribe: `${PLATFORM_API_BASE_URL}/api/v1/newsletter/unsubscribe/`,
};

export async function getSubscribers(): Promise<Subscriber[]> {
  const data = await DataService.get<Subscriber[]>(`${NEWSLETTER_URLS.allSubscribers}`);
  return data;
}
export async function getSubscribersCount(): Promise<number> {
  const data = await DataService.get<number>(`${NEWSLETTER_URLS.subscribersCount}`);
  return data;
}
export const subscribe = (body: SubscribeBody): Promise<SubscribeBody> =>
  DataService.post<SubscribeBody>(NEWSLETTER_URLS.subscribe, body);
export const unsubscribe = async (email: string) => {
  const data = await DataService.delete(`${NEWSLETTER_URLS.unsubscribe}/${email}`);
  return data;
};
