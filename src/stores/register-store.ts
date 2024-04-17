import { create } from "zustand";

type SetFormDataState = {
  registerData: RegisterData;
  setRegisterData: RegisterDataSetter;
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
    set((state) => {
      // Determine which fields to include based on tab value
      let newData: Partial<RegisterData> = {};

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

      return {
        registerData: { ...state.registerData, ...newData },
      };
    }),
}));

export default useRegisterStore;
