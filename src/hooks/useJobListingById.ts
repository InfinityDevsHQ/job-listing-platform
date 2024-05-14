import { getJobById } from '@/lib/jobs';
import { useQuery } from '@tanstack/react-query';
export function useJobListingById({ jobId }: { jobId: string }) {
  return useQuery({
    queryKey: ['promotedCompanies'],
    queryFn: async () => await getJobById(jobId),
  });
}
