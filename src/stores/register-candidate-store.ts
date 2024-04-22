import { create } from "zustand";

type SetFormDataState = {
  registerCandidateData: RegisterCandidateFormData;
  setRegisterCandidateData: (value: RegisterCandidateFormData) => void;
};

const useRegisterFormData = create<SetFormDataState>((set) => ({
  registerCandidateData: {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  setRegisterCandidateData: (data) =>
    set((state) => ({
      registerCandidateData: { ...state.registerCandidateData, ...data },
    })),
}));

export default useRegisterFormData;
