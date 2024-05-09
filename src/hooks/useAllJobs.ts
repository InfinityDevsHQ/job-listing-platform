import { getJobs } from '@/lib/jobs';
import { useQuery } from '@tanstack/react-query';

export function useAllJobs({ isHot }: { isHot: boolean }) {
  return useQuery({
    queryKey: ['allJobs'],
    queryFn: async () => await getJobs({ is_hot: isHot }),
  });
}
