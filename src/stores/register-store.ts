import { create } from "zustand";

type SetFormDataState = {
  registerData: RegisterData;
  setRegisterData: (value: RegisterData) => void;
};

const useRegisterStore = create<SetFormDataState>((set) => ({
  registerData: {
    tab: "Candidate",
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    company: "",
    contactName: "",
    workMail: "",
    phoneNumber: "",
    city: "",
  },
  setRegisterData: (data) =>
    set((state) => ({
      registerData: { ...state.registerData, ...data },
    })),
}));

export default useRegisterStore;
