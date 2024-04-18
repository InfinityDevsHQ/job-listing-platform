import { create } from "zustand";

type OnBoardingState = {
  onBoardingData: OnBoardingData;
  setOnBoardingData: (data: Partial<OnBoardingData>) => void;
};

const useOnBoardingStore = create<OnBoardingState>((set) => ({
  onBoardingData: {
    country: "",
    password: "",
    imgUrl: "",
    employmentType: "",
    collaborationType: "",
    phoneNumber: "",
    linkedin: "",
    x: "",
    github: "",
    termsAgreed: false,
  },
  setOnBoardingData: (data) =>
    set((state) => ({ onBoardingData: { ...state.onBoardingData, ...data } })),
}));
export default useOnBoardingStore;
