import { getPromotedCompanies } from '@/lib/companies';
import { useQuery } from '@tanstack/react-query';
export const GET_PROMOTED_COMPANIES_KEY = 'promotedCompanies';
export function usePromotedCompanies() {
  return useQuery({
    queryKey: [GET_PROMOTED_COMPANIES_KEY],
    queryFn: getPromotedCompanies,
  });
}
