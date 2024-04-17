import { create } from "zustand";

type FormDataState = {
  email: string;
  password: string;
  remember: boolean;
};

type SetFormDataState = {
  loginData: FormDataState;
  setLoginData: (data: Partial<FormDataState>) => void;
};

const useLoginData = create<SetFormDataState>((set) => ({
  loginData: {
    email: "",
    password: "",
    remember: false,
  },
  setLoginData: (data) =>
    set((state) => ({
      loginData: { ...state.loginData, ...data },
    })),
}));

export default useLoginData;
