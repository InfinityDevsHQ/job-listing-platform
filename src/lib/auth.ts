'use server';
import { LoginBodyProps, LoginResProps, RegisterBodyProps, RegisterResProps } from '@/types/types';
import { deleteToken, storeToken } from './auth-token';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const AUTH_URLS = {
  registerCandidate: `${PLATFORM_API_BASE_URL}/api/v1/users/`,
  registerCompany: `${PLATFORM_API_BASE_URL}/api/v1/companies/`,
  login: `${PLATFORM_API_BASE_URL}/api/v1/auth/login`,
};

export const registerCandidate = async (body: RegisterBodyProps): Promise<RegisterResProps> => {
  const data = await DataService.post<RegisterResProps>(AUTH_URLS.registerCandidate, body);
  storeToken({ token: data.access_token });
  return data;
};

export const login = async (body: LoginBodyProps): Promise<LoginResProps> => {
  const data = await DataService.post<LoginResProps>(AUTH_URLS.login, body);
  storeToken({ token: data.access_token });
  return data;
};

export const registerCompany = (body: RegisterBodyProps) =>
  DataService.post(AUTH_URLS.registerCompany, body);

export const removeToken = async () => {
  deleteToken();
};
