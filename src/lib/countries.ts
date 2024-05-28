'use server';
import { Country } from '@/types/types';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const COUNTRIES_URLS = {
  allCountries: `${PLATFORM_API_BASE_URL}/api/v1/platform/country`,
  singleCountry: `${PLATFORM_API_BASE_URL}/api/v1/platform/country/`,
};
const Countries: Country[] = [
  {
    name: 'Austria',
    default_language: 'German',
    languages: ['English', 'German', 'Ukrainian'],
    currencies: ['EUR'],
    default_currency: 'EUR',
    flag_icon: '/assets/icons/countries/ai-icon.png',
    order_in_the_menu: 1,
    id: 1,
  },
  {
    name: 'Czechia',
    default_language: 'Czech',
    languages: ['English', 'Czech', 'Ukrainian'],
    currencies: ['Kč', 'EUR'],
    default_currency: 'Kč',
    flag_icon: '/assets/icons/countries/cz-icon.png',
    order_in_the_menu: 2,
    id: 2,
  },
  {
    name: 'Germany',
    default_language: 'German',
    languages: ['English', 'German', 'Ukrainian'],
    currencies: ['EUR'],
    default_currency: 'EUR',
    flag_icon: '/assets/icons/countries/ger-icon.png',
    order_in_the_menu: 3,
    id: 3,
  },
  {
    name: 'Ireland',
    default_language: 'English',
    languages: ['English', 'Ukrainian'],
    currencies: ['EUR'],
    default_currency: 'EUR',
    flag_icon: '/assets/icons/countries/irl-icon.png',
    order_in_the_menu: 4,
    id: 4,
  },
  {
    name: 'Slovakia',
    default_language: 'Slovak',
    languages: ['English', 'Slovak', 'Ukrainian'],
    currencies: ['EUR'],
    default_currency: 'EUR',
    flag_icon: '/assets/icons/countries/sk-icon.png',
    order_in_the_menu: 5,
    id: 5,
  },
  {
    name: 'remote',
    default_language: 'English',
    languages: ['English', 'Czech', 'German', 'Ukrainian', 'Slovak'],
    currencies: ['EUR', 'USD'],
    default_currency: 'EUR',
    flag_icon: '/assets/icons/countries/remote-icon.png',
    order_in_the_menu: 6,
    id: 6,
  },
];
export const getCountries = async (): Promise<Country[]> => {
  return Countries;
};

export async function getCountryById(countryId: string): Promise<Country> {
  if (!countryId) {
    // can return 404 heres
    return {} as Country;
  }
  const data = Countries.find((item) => item.id.toString() === countryId);
  if (data) return data;
  return {} as Country;
}
