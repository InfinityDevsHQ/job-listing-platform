'use server';
import { UploadCVPayload, UploadCVResponse } from '@/types/types';
import { DataService } from './data-service';
const NEURAL_API_BASE_URL = process.env.NEURAL_API_BASE_URL;

const RECRUITER_URLS = {
  uploadCVUrl: `${NEURAL_API_BASE_URL}/api/v1/recruiters/recruiters/`,
};

export async function uploadCV(payload: UploadCVPayload): Promise<UploadCVResponse> {
  const formData = new FormData();
  formData.append('user_id', payload.user_id.toString());
  formData.append('cv', payload.cv);
  const data = await DataService.post<UploadCVResponse>(RECRUITER_URLS.uploadCVUrl, formData);
  return data;
}
