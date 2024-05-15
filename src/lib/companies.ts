'use server';
import { Company } from '@/types/types';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const COMPANIES_URLS = {
  allPromotedCompanies: `${PLATFORM_API_BASE_URL}/api/v1/companies/promoted`,
  singleCompany: `${PLATFORM_API_BASE_URL}/api/v1/companies`,
};

export async function getPromotedCompanies(): Promise<Company[]> {
  const data = await DataService.get<Company[]>(`${COMPANIES_URLS.allPromotedCompanies}`, {
    skip: `0`,
    limit: `5`,
    sort_by: 'alphabetical',
  });
  return data;
}
export async function getCompanyById(companyId: string | number): Promise<Company> {
  if (!companyId) {
    // can return 404 heres
    return {} as Company;
  }
  const data = await DataService.get<Company>(`${COMPANIES_URLS.singleCompany}/${companyId}`);
  return data;
}
