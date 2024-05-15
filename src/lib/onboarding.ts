'use server';
import { OnboardingData, UploadCVPayload, UserData } from '@/types/types';
import { DataService } from './data-service';
const NEURAL_API_BASE_URL = process.env.NEURAL_API_BASE_URL;
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;
const ONBOARDING_URLS = {
  uploadCVUrl: `${NEURAL_API_BASE_URL}/api/v1/recruiters/recruiters`,
  uploadOnBoarding: `${PLATFORM_API_BASE_URL}/api/v1/user/onboard`,
};

export const uploadCV = async (payload: UploadCVPayload, token: string) => {
  try {
    const formData = new FormData();
    formData.append('user_id', payload.user_id.toString());
    formData.append('cv', payload.cv);

    const response = await fetch(`${ONBOARDING_URLS.uploadCVUrl}`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
    console.log(response);
  } catch (error) {
    console.error('Error uploading CV: ', error);
    throw error;
  }
};

export async function uploadOnBoardingData(userData: OnboardingData): Promise<UserData> {
  const data = await DataService.post<UserData>(ONBOARDING_URLS.uploadOnBoarding, userData);
  return data;
}
