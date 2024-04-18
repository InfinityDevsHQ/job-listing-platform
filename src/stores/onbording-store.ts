import { create } from "zustand";

type OnBoardingState = {
  onBoardingData: OnBoardingData;
  setOnBoardingData: (data: Partial<OnBoardingData>) => void;
};

export const useOnBoardingStore = create<OnBoardingState>((set) => ({
  onBoardingData: {
    email: "",
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
