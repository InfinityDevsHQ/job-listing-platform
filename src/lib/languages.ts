'use server';
import { DataService } from './data-service';
const NEURAL_API_BASE_URL = process.env.NEURAL_API_BASE_URL;

const LANGUAGES_URLS = {
  allLanguages: `${NEURAL_API_BASE_URL}/api/v1/platform/languages`,
};

// TODO: make query params dynamic and easier to use in future
export default async function getCountries(): Promise<[]> {
  const data = await DataService.get<[]>(`${LANGUAGES_URLS.allLanguages}`, {
    skip: '0',
    limit: '10',
    allow_for_translated_jobs: 'false',
  });
  return data;
}
