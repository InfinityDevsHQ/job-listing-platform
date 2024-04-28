'use server';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const SYSTEM_URLS = {
  citySuggestions: `${PLATFORM_API_BASE_URL}/api/v1/utils/city_suggestions/`,
  aboutExtract: `${PLATFORM_API_BASE_URL}/api/v1/utils/webpage-about-extract-content`,
};

export async function getCitySuggestions(city: string, country?: string): Promise<string[]> {
  const data = await DataService.get<string[]>(
    `${SYSTEM_URLS.citySuggestions}?city=${city}${country ? `&country=${country}` : ''}`
  );
  return data;
}
export async function getWebpageAboutExtractContent(
  url: string,
  limit_words: number = 1000
): Promise<{}> {
  const data = await DataService.get<{}>(`${SYSTEM_URLS.aboutExtract}`, {
    url,
    limit_words: `${limit_words}`,
  });
  return data;
}
