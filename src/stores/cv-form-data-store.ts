import { create } from "zustand";

type SetFormDataState = {
  cvFormData: CVFormData;
  setCVFormData: (value: CVFormData) => void;
};

const useCVFormData = create<SetFormDataState>((set) => ({
  cvFormData: {
    imgUrl: "",
  },
  setCVFormData: (data) =>
    set((state) => ({
      cvFormData: { ...state.cvFormData, ...data },
    })),
}));

export default useCVFormData;
