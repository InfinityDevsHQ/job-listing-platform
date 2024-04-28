'use server';
import { HealthCheck } from '@/types/types';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const GENERIC_URLS = {
  healthCheck: `${PLATFORM_API_BASE_URL}/api/v1/health`,
  protected: `${PLATFORM_API_BASE_URL}/api/v1/protected`,
  triggerError: `${PLATFORM_API_BASE_URL}/api/v1/test-sentry`,
};

export async function getHealthCheck(): Promise<HealthCheck> {
  const data = await DataService.get<HealthCheck>(`${GENERIC_URLS.healthCheck}`);
  return data;
}
export async function getProtectedRoute(): Promise<string> {
  const data = await DataService.get<string>(`${GENERIC_URLS.protected}`);
  return data;
}
export async function getTriggerError(): Promise<string> {
  const data = await DataService.get<string>(`${GENERIC_URLS.triggerError}`);
  return data;
}
