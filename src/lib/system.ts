'use server';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const SYSTEM_URLS = {
  stats: `${PLATFORM_API_BASE_URL}/api/v1/system/postgres/stats`,
  initCountries: `${PLATFORM_API_BASE_URL}/api/v1/system/postgres/init-countries`,
};

export async function getSystemStats(): Promise<{}> {
  const data = await DataService.get<{}>(`${SYSTEM_URLS.stats}`);
  return data;
}
export async function getSystemInitCountries(): Promise<{}> {
  const data = await DataService.get<{}>(`${SYSTEM_URLS.initCountries}`);
  return data;
}
