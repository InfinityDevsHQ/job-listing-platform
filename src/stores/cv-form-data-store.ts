import { create } from "zustand";

type SetFormDataState = {
  registerCandidateData: RegisterCandidateFormData;
  setRegisterCandidateData: (value: RegisterCandidateFormData) => void;
};

const useRegisterCandidateStore = create<SetFormDataState>((set) => ({
  registerCandidateData: {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
  },
  setRegisterCandidateData: (data) =>
    set((state) => ({
      registerCandidateData: { ...state.registerCandidateData, ...data },
    })),
}));

export default useRegisterCandidateStore;
