import { getCountries } from '@/lib/countries';
import { useQuery } from '@tanstack/react-query';
import { getQueryClient } from '../react-query-client';

export const GET_COUNTRIES_KEY = 'get-countries';

export function useCountries() {
  return useQuery({
    retry: 0,
    queryKey: [GET_COUNTRIES_KEY],
    queryFn: getCountries,
  });
}

export function usePrefetchCountries() {
  const queryClient = getQueryClient();
  return queryClient.prefetchQuery({
    retry: 0,
    queryKey: [GET_COUNTRIES_KEY],
    queryFn: getCountries,
  });
}
