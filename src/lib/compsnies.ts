'use server';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const COMPANIES_URLS = {
  allPromotedCompanies: `${PLATFORM_API_BASE_URL}/api/v1/companies/promoted`,
  singleCompany: `${PLATFORM_API_BASE_URL}/api/v1/companies/promoted`,
};

export async function getPromotedCompanies(): Promise<{}> {
  const data = await DataService.get<{}>(`${COMPANIES_URLS.allPromotedCompanies}`, {
    skip: `0`,
    limit: `20`,
    sort_by: 'alphabetical',
  });
  return data;
}
export async function getCompanyById(companyId: string | number): Promise<{}> {
  if (!companyId) {
    // can return 404 heres
    return {} as {};
  }
  const data = await DataService.get<{}>(`${COMPANIES_URLS.singleCompany}/${companyId}`);
  return data;
}
