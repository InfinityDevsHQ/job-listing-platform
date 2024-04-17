import { create } from "zustand";

type FormDataState = {
  tab: "Company" | "Candidate";
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
  registerData: FormDataState;
  setRegisterData: (data: Partial<FormDataState>) => void;
};

const useRegisterStore = create<SetFormDataState>((set) => ({
  registerData: {
    tab: "Candidate",
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
    set((state) => {
      // Determine which fields to include based on tab value
      let newData: Partial<FormDataState> = {};
      if (data.tab === "Candidate") {
        newData = {
          email: data.email || "",
          passwordOne: data.passwordOne || "",
          passwordTwo: data.passwordTwo || "",
          company: "",
          contactName: "",
          workMail: "",
          phoneNumber: "",
          city: "",
        };
      } else if (data.tab === "Company") {
        newData = {
          email: "",
          passwordOne: "",
          passwordTwo: "",
          company: data.company || "",
          contactName: data.contactName || "",
          workMail: data.workMail || "",
          phoneNumber: data.phoneNumber || "",
          city: data.city || "",
        };
      }
      return {
        registerData: { ...state.registerData, ...newData },
      };
    }),
}));

export default useRegisterStore;
