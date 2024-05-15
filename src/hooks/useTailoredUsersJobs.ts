import { tailoredUserJobs } from '@/lib/jobs-mixer';
import { useMutation } from '@tanstack/react-query';

export const TAILORED_USERS_JOBS_KEY = 'tailored-users-key';
export function useTailoredUsersJobs() {
  return useMutation({
    mutationKey: [TAILORED_USERS_JOBS_KEY],
    mutationFn: (id: number) => tailoredUserJobs(id),
  });
}
