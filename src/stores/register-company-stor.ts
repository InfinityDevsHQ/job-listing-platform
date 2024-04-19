import { create } from "zustand";

type SetFormDataState = {
  registerCompanyData: RegisterCompanyFormData;
  setRegisterCompanyData: (value: RegisterCompanyFormData) => void;
};

const useRegisterCompanyStore = create<SetFormDataState>((set) => ({
  registerCompanyData: {
    passwordTwo: "",
    company: "",
    contactName: "",
    workMail: "",
    phoneNumber: "",
    city: "",
  },
  setRegisterCompanyData: (data) =>
    set((state) => ({
      registerCompanyData: { ...state.registerCompanyData, ...data },
    })),
}));

export default useRegisterCompanyStore;
