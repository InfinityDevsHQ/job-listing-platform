import { create } from "zustand";
type LocationConstProp = {
  onBoardingContactData: OnBoardingContactFormData;
  setOnBoardingContactData: (value: OnBoardingContactFormData) => void;
};
const useOnBoardingContactData = create<LocationConstProp>((set) => ({
  onBoardingContactData: {
    phoneNumber: "",
    linkedin: "",
    twitter: "",
    github: "",
  },
  setOnBoardingContactData: (data) =>
    set((state) => ({
      onBoardingContactData: { ...state.onBoardingContactData, ...data },
    })),
}));

export default useOnBoardingContactData;
