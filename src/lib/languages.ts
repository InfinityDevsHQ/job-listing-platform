'use server';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const LANGUAGES_URLS = {
  allLanguages: `${PLATFORM_API_BASE_URL}/api/v1/platform/languages`,
};

export default async function getLanguages(): Promise<string[]> {
  const data = await DataService.get<string[]>(`${LANGUAGES_URLS.allLanguages}`);
  return data;
}
