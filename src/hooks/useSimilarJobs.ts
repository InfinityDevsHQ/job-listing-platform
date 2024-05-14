import { getSimilarJobs } from '@/lib/jobs';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const GET_SIMILAR_JOBS_KEY = 'similarJobs';

export function useSimilarJobs() {
  return useMutation({
    mutationKey: [GET_SIMILAR_JOBS_KEY],
    mutationFn: (jobId: string) => getSimilarJobs(jobId),
    onError: () => toast.error('Error While Fetching Similar Jobs'),
  });
}
