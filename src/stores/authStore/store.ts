import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { authInitialState } from './state';
import { AuthAction, AuthState } from './type';

const useAuthStore = create<AuthState & AuthAction>()(
  immer((set, get) => ({
    ...authInitialState,
    setUser: (user) => set({ user }),
    setAccessToken: (accessToken) => set({ accessToken }),
    reset: () => set(authInitialState),
  }))
);

export default useAuthStore;
