import { create } from "zustand";
type PostJobsStore = {
  postJobData: PostJobFormDataType;
  setPostJobData: (value: PostJobFormDataType) => void;
};
const usePostJobDataStore = create<PostJobsStore>((set) => ({
  postJobData: {
    jobTitle: "",
    city: "",
    employment: "",
    country: "",
    language: "",
    remunerationRageStart: "",
    remunerationRageEnd: "",
    currency: "",
    description: "",
  },
  setPostJobData: (data) =>
    set((state) => ({
      postJobData: { ...state.postJobData, ...data },
    })),
}));

export default usePostJobDataStore;
