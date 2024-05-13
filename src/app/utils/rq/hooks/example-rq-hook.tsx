import { getJobs } from '@/lib/jobs';
import { useQuery } from '@tanstack/react-query';

export const useJobs = () => {
  return useQuery({
    queryKey: ['allJobs'],
    queryFn: () => getJobs({ is_hot: true }),
    retry: 0,
    refetchOnWindowFocus: true,
  });
};
