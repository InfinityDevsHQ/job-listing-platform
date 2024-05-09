import { findSimilarJobs } from '@/lib/jobs';
import { useQuery } from '@tanstack/react-query';
export function useSimilarJobs({ jobId }: { jobId: string }) {
  return useQuery({
    queryKey: ['similarJobs'],
    queryFn: async () => await findSimilarJobs({ jobId: jobId }),
  });
}
