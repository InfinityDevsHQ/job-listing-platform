'use server';
import { Country } from '@/types/types';
import { DataService } from './data-service';
const NEURAL_API_BASE_URL = process.env.NEURAL_API_BASE_URL;

const COUNTRIES_URLS = {
  allCountries: `${NEURAL_API_BASE_URL}/api/v1/platform/country`,
  singleCountry: `${NEURAL_API_BASE_URL}/api/v1/platform/country/`,
};

// TODO: make query params dynamic and easier to use in future
export async function getCountries(): Promise<Country[]> {
  const data = await DataService.get<Country[]>(`${COUNTRIES_URLS.allCountries}`, {
    skip: '0',
    limit: '10',
    allow_for_translated_jobs: 'false',
  });
  return data;
}

export async function getJobById(countryId: string): Promise<Country> {
  if (!countryId) {
    // can return 404 heres
    return {} as Country;
  }
  const data = await DataService.get<Country>(`${COUNTRIES_URLS.singleCountry}/${countryId}`, {
    skip: '0',
    limit: '10',
    allow_for_translated_jobs: 'false',
  });
  return data;
}
