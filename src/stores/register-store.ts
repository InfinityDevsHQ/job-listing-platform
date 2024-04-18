import { create, SetState } from "zustand";

type RegisterData = {
  tab: "Candidate" | "Company";
  username: string;
  email: string;
  passwordOne: string;
  passwordTwo: string;
  company: string;
  contactName: string;
  workMail: string;
  phoneNumber: string;
  city: string;
};

type SetFormDataState = {
  registerData: RegisterData;
  setRegisterData: SetState<RegisterData>;
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
