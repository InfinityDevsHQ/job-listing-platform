import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { pageInitialState } from './state';
import { PageAction, PageState } from './type';

const usePageStore = create<PageState & PageAction>()(
  immer((set, get) => ({
    ...pageInitialState,
    setCurrentUserRole: (currentUserRole) => set({ currentUserRole }),
    reset: () => set(pageInitialState),
  }))
);

export default usePageStore;
