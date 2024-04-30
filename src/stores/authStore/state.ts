import { User } from '@/types/types';
import { AuthState } from './type';

export const authInitialState: AuthState = {
  user: {} as User,
  accessToken: '',
};
