import { create } from "zustand";

type SetFormDataState = {
  filterJobsData: FilterJobsFormDataType;
  setFilterJobsData: (value: FilterJobsFormDataType) => void;
};

const useFilterJobsDataStore = create<SetFormDataState>((set) => ({
  filterJobsData: {
    employmentType: "",
    collaborationType: "",
  },
  setFilterJobsData: (data) =>
    set((state) => ({
      filterJobsData: { ...state.filterJobsData, ...data },
    })),
}));

export default useFilterJobsDataStore;
