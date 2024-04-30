'use server';
import { Job, PostJobWorkerInputData } from '@/types/types';
import { DataService } from './data-service';
const NEURAL_API_BASE_URL = process.env.NEURAL_API_BASE_URL;

const JOBS_URLS = {
  allJobs: `${NEURAL_API_BASE_URL}/api/v1/pgsql/job-listings/all`,
  singleJob: `${NEURAL_API_BASE_URL}/api/v1/pgsql/job-listings`,
  postJob: `${NEURAL_API_BASE_URL}/api/v1/pgsql/job-listing`,
};

type GetJobsParams = {
  skip?: number;
  limit?: number;
  allow_for_translated_jobs?: boolean;
};
export async function getJobs({
  skip = 0,
  limit = 10,
  allow_for_translated_jobs = false,
}: GetJobsParams): Promise<Job[]> {
  const data = await DataService.get<Job[]>(`${JOBS_URLS.allJobs}`, {
    skip: `${skip}`,
    limit: `${limit}`,
    allow_for_translated_jobs: `${allow_for_translated_jobs}`,
  });
  return data;
}

export async function getJobById(jobId: string): Promise<Job> {
  if (!jobId) {
    // can return 404 heres
    return {} as Job;
  }
  const data = await DataService.get<Job>(`${JOBS_URLS.singleJob}/${jobId}`, {
    skip: '0',
    limit: '10',
    allow_for_translated_jobs: 'false',
  });
  return data;
}
export const postJobListing = (body: PostJobWorkerInputData): Promise<PostJobWorkerInputData> =>
  DataService.post<PostJobWorkerInputData>(JOBS_URLS.postJob, body);
