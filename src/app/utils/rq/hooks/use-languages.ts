import getLanguages from '@/lib/languages';
import { useQuery } from '@tanstack/react-query';

export const GET_LANGUAGES_KEY = 'get-languages';

export function useLanguages() {
  return useQuery({
    queryKey: [GET_LANGUAGES_KEY],
    queryFn: () => getLanguages(),
  });
}
