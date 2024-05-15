'use server';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const LANGUAGES_URLS = {
  allLanguages: `${PLATFORM_API_BASE_URL}/api/v1/platform/languages`,
};
type Languages = {
  id: number;
  name: string;
  default_language: string;
  languages: string[];
  currencies: string[];
  flag_icon: string;
  order_in_the_menu: number;
};
export default async function getLanguages(): Promise<Languages[]> {
  const data = await DataService.get<Languages[]>(`${LANGUAGES_URLS.allLanguages}`);
  return data;
}
