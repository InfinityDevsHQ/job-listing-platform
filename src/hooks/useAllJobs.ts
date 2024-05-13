import { getJobs } from '@/lib/jobs';
import { useQuery } from '@tanstack/react-query';

export function useAllJobs({ isHot }: { isHot: boolean }) {
  return useQuery({
    queryKey: ['allJobs'],
    queryFn: () => getJobs({ is_hot: isHot }),
  });
}
