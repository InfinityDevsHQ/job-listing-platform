'use server';
import { Country } from '@/types/types';
import { DataService } from './data-service';
const NEURAL_API_BASE_URL = process.env.NEURAL_API_BASE_URL;

const COUNTRIES_URLS = {
  allCountries: `${NEURAL_API_BASE_URL}//api/v1/platform/country`,
};

// TODO: make query params dynamic and easier to use in future
export default async function getCountries(): Promise<Country[]> {
  const data = await DataService.get<Country[]>(`${COUNTRIES_URLS.allCountries}`, {
    skip: '0',
    limit: '10',
    allow_for_translated_jobs: 'false',
  });
  return data;
}
