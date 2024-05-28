import { updateUserProfile } from '@/lib/user';
import { UserProfile } from '@/types/types';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
export const UPDATE_USER_PROFILE_KEY = 'updateUserProfile';
export function useUpdateUserProfile() {
  return useMutation({
    mutationKey: [UPDATE_USER_PROFILE_KEY],
    mutationFn: (body: UserProfile) => updateUserProfile(body),
    retry: 1,
    onSuccess: () => toast.success(`Changes Saved Successfully.`),
  });
}
