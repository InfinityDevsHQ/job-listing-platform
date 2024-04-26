export type AuthState = {
  user: UserProfile;
};

export type AuthAction = {
  setUser: (user: AuthState['user']) => void;
  reset: () => void;
};

export type UserProfile = {
  email: string;
  firstname: string;
  lastname: string;
  website_id?: number | string;
};
