'use server';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const COMPANIES_URLS = {
  allPromotedCompanies: `${PLATFORM_API_BASE_URL}/api/v1/companies/promoted`,
  singleCompany: `${PLATFORM_API_BASE_URL}/api/v1/companies/promoted`,
};

// TODO: make query params dynamic and easier to use in future
type PromotedCompaniesProps = {
  sort_by: string;
  skip?: number;
  limit?: number;
};

export async function getPromotedCompanies({
  sort_by = 'alphabetical',
  skip = 0,
  limit = 20,
}: PromotedCompaniesProps): Promise<{}> {
  const data = await DataService.get<{}>(
    `${COMPANIES_URLS.allPromotedCompanies}?sort_by=${sort_by}&skip=${skip}$limit=${limit}`,
    {
      skip: `${skip}`,
      limit: `${limit}`,
      allow_for_translated_jobs: 'false',
    }
  );
  return data;
}
export async function getCompanyById(companyId: string | number): Promise<{}> {
  if (!companyId) {
    // can return 404 heres
    return {} as {};
  }
  const data = await DataService.get<{}>(`${COMPANIES_URLS.singleCompany}/${companyId}`, {
    skip: '0',
    limit: '10',
    allow_for_translated_jobs: 'false',
  });
  return data;
}
