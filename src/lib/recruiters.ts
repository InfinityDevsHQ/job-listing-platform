'use server';
import { Recruiter } from '@/types/types';
import { DataService } from './data-service';
const NEURAL_API_BASE_URL = process.env.NEURAL_API_BASE_URL;

const RECRUITER_URLS = {
  allRecruiters: `${NEURAL_API_BASE_URL}/api/v1/recruiters/recruiters/`,
  singleRecruiter: `${NEURAL_API_BASE_URL}/api/v1/recruiters/recruiters/{recruiter_id}`,
};

// TODO: make query params dynamic and easier to use in future
export async function getJobs(): Promise<Recruiter[]> {
  const data = await DataService.get<Recruiter[]>(`${RECRUITER_URLS.allRecruiters}`, {
    skip: '0',
    limit: '10',
    allow_for_translated_jobs: 'false',
  });
  return data;
}

export async function getJobById(recruiter_id: string): Promise<Recruiter> {
  if (!recruiter_id) {
    // can return 404 heres
    return {} as Recruiter;
  }
  const data = await DataService.get<Recruiter>(
    `${RECRUITER_URLS.singleRecruiter}/${recruiter_id}`,
    {
      skip: '0',
      limit: '10',
      allow_for_translated_jobs: 'false',
    }
  );
  return data;
}
