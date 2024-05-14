import { getJobById } from '@/lib/jobs';
import { useQuery } from '@tanstack/react-query';
export const GET_SINGLE_JOB_LISTING_BY_ID_KEY = 'promotedCompanies';
export function useJobListingById(jobId: string) {
  return useQuery({
    queryKey: [GET_SINGLE_JOB_LISTING_BY_ID_KEY],
    queryFn: () => getJobById(jobId),
  });
}
