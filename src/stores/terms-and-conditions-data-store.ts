import { create } from "zustand";

type SetTermsAndConditions = {
  termsData: TermsAndConditionsFormData;
  setTermsData: (value: TermsAndConditionsFormData) => void;
};

const useTermsAndConditionsData = create<SetTermsAndConditions>((set) => ({
  termsData: {
    termsAgreed: false,
  },
  setTermsData: (data) =>
    set((state) => ({
      termsData: { ...state, ...data },
    })),
}));

export default useTermsAndConditionsData;
