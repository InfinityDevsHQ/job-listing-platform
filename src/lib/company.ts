'use server';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const COMPANY_URLS = {
  company: `${PLATFORM_API_BASE_URL}/api/v1/company/`,
  companyLogin: `${PLATFORM_API_BASE_URL}/api/v1/newsletter/subscribers/count`,
};
// TODO: add proper types
export async function getCompanyProfile(): Promise<{}> {
  const data = await DataService.get<{}>(`${COMPANY_URLS.company}`);
  return data;
}
export async function getCompanyLoginLink(email: string): Promise<number> {
  const data = await DataService.get<number>(`${COMPANY_URLS.companyLogin}`, {
    email: `${email}`,
  });
  return data;
}
