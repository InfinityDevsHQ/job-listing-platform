import { create } from "zustand";
import { SetLoginDataState } from "@/types/login-data-setter";
const useLoginData = create<SetLoginDataState>((set) => ({
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
