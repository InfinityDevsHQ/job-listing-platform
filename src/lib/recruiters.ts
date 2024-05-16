'use server';
import { Recruiter } from '@/types/types';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const RECRUITER_URLS = {
  allRecruiters: `${PLATFORM_API_BASE_URL}/api/v1/recruiters/recruiters`,
  singleRecruiter: `${PLATFORM_API_BASE_URL}/api/v1/recruiters/recruiters`,
};

// TODO: make query params dynamic and easier to use in future
type GetRecruitersParams = {
  skip?: number;
  limit?: number;
};

export async function getRecruiters({ skip = 0, limit = 10 }: GetRecruitersParams): Promise<any> {
  const data = await DataService.get<Recruiter[]>(`${RECRUITER_URLS.allRecruiters}`, {
    skip: `${skip}`,
    limit: `${limit}`,
  });
  return data;
}

export async function getRecruiterById(recruiter_id: string): Promise<Recruiter> {
  if (!recruiter_id) {
    // can return 404 heres
    return {} as Recruiter;
  }
  const data = await DataService.get<Recruiter>(
    `${RECRUITER_URLS.singleRecruiter}/${recruiter_id}`
  );
  return data;
}
