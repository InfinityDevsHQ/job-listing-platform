'use server';
import { LoginBodyProps, LoginResProps, RegisterBodyProps, RegisterResProps } from '@/types/types';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const AUTH_URLS = {
  registerCandidate: `${PLATFORM_API_BASE_URL}/api/v1/users/`,
  registerCompany: `${PLATFORM_API_BASE_URL}/api/v1/companies/`,
  login: `${PLATFORM_API_BASE_URL}/api/v1/auth/login`,
};

export const registerCandidate = (body: RegisterBodyProps): Promise<RegisterResProps> =>
  DataService.post<RegisterResProps>(AUTH_URLS.registerCandidate, body);

export const login = (body: LoginBodyProps): Promise<LoginResProps> =>
  DataService.post<LoginResProps>(AUTH_URLS.login, body);

export const registerCompany = (body: RegisterBodyProps) =>
  DataService.post(AUTH_URLS.registerCompany, body);
