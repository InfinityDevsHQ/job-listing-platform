import { LoginFormData } from "./login-data";
export type SetLoginDataState = {
  loginData: LoginFormData;
  setLoginData: (data: Partial<FormDataState>) => void;
};
