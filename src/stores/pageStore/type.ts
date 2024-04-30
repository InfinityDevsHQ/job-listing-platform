export type PageState = {
  currentUserRole: string;
};

export type PageAction = {
  setCurrentUserRole: (currentUserRole: PageState['currentUserRole']) => void;
  reset: () => void;
};
