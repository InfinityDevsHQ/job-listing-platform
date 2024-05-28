'use server';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const LANGUAGES_URLS = {
  allLanguages: `${PLATFORM_API_BASE_URL}/api/v1/platform/languages`,
};
const Languages = ['Czech', 'English', 'German', 'Slovak', 'Ukrainian'];
export default async function getLanguages(): Promise<string[]> {
  return Languages;
}
