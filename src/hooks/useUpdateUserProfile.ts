import { updateUserProfile } from '@/lib/user';
import { UserBody } from '@/types/types';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
export const UPDATE_USER_PROFILE_KEY = 'updateUserProfile';
export function useUpdateUserProfile(body: UserBody) {
  return useMutation({
    mutationKey: [UPDATE_USER_PROFILE_KEY],
    mutationFn: () => updateUserProfile(body),
    retry: 1,
    onSuccess: () => toast.success(`Changes Saved Successfully.`),
  });
}
