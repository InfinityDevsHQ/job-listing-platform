import { User } from '@/types/types';

export type AuthState = {
  user: User;
};

export type AuthAction = {
  setUser: (user: AuthState['user']) => void;
  reset: () => void;
};
