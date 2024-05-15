import { getSimilarJobs } from '@/lib/jobs';
import { useQuery } from '@tanstack/react-query';

export const SIMILAR_JOBS = 'similarJobs';

export function useSimilarJobs({ jobId }: { jobId: string }) {
  return useQuery({
    queryKey: [SIMILAR_JOBS],
    queryFn: async () => await getSimilarJobs(jobId),
  });
}
