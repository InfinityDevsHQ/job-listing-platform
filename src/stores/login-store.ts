import { create } from "zustand";
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
