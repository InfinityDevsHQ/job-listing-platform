import { getPromotedCompanies } from '@/lib/companies';
import { useQuery } from '@tanstack/react-query';

export const PROMOTED_COMPANIES = 'promotedCompanies';

export function usePromotedCompanies() {
  return useQuery({
    queryKey: [PROMOTED_COMPANIES],
    queryFn: async () => await getPromotedCompanies(),
  });
}
