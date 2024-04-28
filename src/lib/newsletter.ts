'use server';
import { Subscriber } from '@/types/types';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const NEWSLETTER_URLS = {
  allSubscribers: `${PLATFORM_API_BASE_URL}/api/v1/newsletter/subscribers`,
  subscribersCount: `${PLATFORM_API_BASE_URL}/api/v1/newsletter/subscribers/count`,
};

export async function getLanguages(): Promise<Subscriber[]> {
  const data = await DataService.get<Subscriber[]>(`${NEWSLETTER_URLS.allSubscribers}`);
  return data;
}
export async function getSubscribersCount(): Promise<number> {
  const data = await DataService.get<number>(`${NEWSLETTER_URLS.subscribersCount}`);
  return data;
}
