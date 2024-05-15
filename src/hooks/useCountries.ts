import { getCountries } from '@/lib/countries';
import { useQuery } from '@tanstack/react-query';
export const GET_COUNTRIES_KEY = 'get-single-job-listing-by-id';
export function useCountries() {
  return useQuery({
    queryKey: [GET_COUNTRIES_KEY],
    queryFn: getCountries,
  });
}
