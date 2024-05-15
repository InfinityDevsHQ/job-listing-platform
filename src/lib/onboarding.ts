'use server';
import { OnboardingData, UserData } from '@/types/types';
import { DataService } from './data-service';
const NEURAL_API_BASE_URL = process.env.NEURAL_API_BASE_URL;
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;
const ONBOARDING_URLS = {
  uploadCVUrl: `${NEURAL_API_BASE_URL}/api/v1/neutral/upload-cv`,
  uploadOnBoarding: `${PLATFORM_API_BASE_URL}/api/v1/user/onboard`,
};

export async function uploadOnBoardingData(userData: OnboardingData): Promise<UserData> {
  const data = await DataService.post<UserData>(ONBOARDING_URLS.uploadOnBoarding, userData);
  return data;
}
