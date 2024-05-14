import { User } from '@/types/types';

export type AuthState = {
  user: User;
  accessToken: string;
  isAuthenticated: boolean;
};

export type AuthAction = {
  setUser: (user: AuthState['user']) => void;
  setAccessToken: (accessToken: string) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  reset: () => void;
};
