import { getPromotedCompanies } from '@/lib/companies';
import { useQuery } from '@tanstack/react-query';
export function usePromotedCompanies() {
  return useQuery({
    queryKey: ['allJobs'],
    queryFn: async () => getPromotedCompanies(),
  });
}
