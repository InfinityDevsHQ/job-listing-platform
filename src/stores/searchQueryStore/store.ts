import { create } from 'zustand';

interface QueryStore {
  query: string;
  setQuery: (newQuery: string) => void;
}

const useSearchQueryStore = create<QueryStore>((set) => ({
  query: '',
  setQuery: (newQuery) => set({ query: newQuery }),
}));

export default useSearchQueryStore;
