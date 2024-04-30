'use server';
import { Country } from '@/types/types';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const COUNTRIES_URLS = {
  allCountries: `${PLATFORM_API_BASE_URL}/api/v1/platform/country`,
  singleCountry: `${PLATFORM_API_BASE_URL}/api/v1/platform/country/`,
};

// TODO: make query params dynamic and easier to use in future
export async function getCountries(): Promise<Country[]> {
  const data = await DataService.get<Country[]>(`${COUNTRIES_URLS.allCountries}`);
  return data;
}

export async function getCountryById(countryId: string): Promise<Country> {
  if (!countryId) {
    // can return 404 heres
    return {} as Country;
  }
  const data = await DataService.get<Country>(`${COUNTRIES_URLS.singleCountry}/${countryId}`);
  return data;
}
