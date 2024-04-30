'use server';
import { OnboardingData, UploadCVPayload, UploadCVResponse, UserData } from '@/types/types';
import { DataService } from './data-service';
const NEURAL_API_BASE_URL = process.env.NEURAL_API_BASE_URL;
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;
const ONBOARDING_URLS = {
  uploadCVUrl: `${NEURAL_API_BASE_URL}/api/v1/recruiters/recruiters/`,
  uploadOnBoarding: `${PLATFORM_API_BASE_URL}/user/onboard`,
};

export async function uploadCV(payload: UploadCVPayload): Promise<UploadCVResponse> {
  const formData = new FormData();
  formData.append('user_id', payload.user_id.toString());
  formData.append('cv', payload.cv);
  const data = await DataService.post<UploadCVResponse>(ONBOARDING_URLS.uploadCVUrl, formData);
  return data;
}
export async function uploadOnBoardingData(userData: OnboardingData): Promise<UserData> {
  const data = await DataService.post<UserData>(ONBOARDING_URLS.uploadOnBoarding, userData);
  return data;
}
