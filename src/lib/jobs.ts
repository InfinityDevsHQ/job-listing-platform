'use server';
import { Job, PostJobWorkerInputData } from '@/types/types';
import { DataService } from './data-service';
const NEURAL_API_BASE_URL = process.env.NEURAL_API_BASE_URL;

const JOBS_URLS = {
  allJobs: `${NEURAL_API_BASE_URL}/api/v1/pgsql/job-listings/all`,
  singleJob: `${NEURAL_API_BASE_URL}/api/v1/pgsql/job-listings`,
  postJob: `${NEURAL_API_BASE_URL}/api/v1/pgsql/job-listing`,
  updateJob: `${NEURAL_API_BASE_URL}/api/v1/pgsql/job-listing/`,
  deleteJob: `${NEURAL_API_BASE_URL}/api/v1/pgsql/job-listing/`,
  similarJobs: `${NEURAL_API_BASE_URL}/api/v1/qdrant/job-listings/similar`,
};

type GetJobsParams = {
  skip?: number;
  limit?: number;
  allow_for_translated_jobs?: boolean;
  is_hot?: boolean;
};
export async function getJobs({
  skip = 0,
  limit = 10,
  allow_for_translated_jobs = false,
  is_hot = false,
}: GetJobsParams): Promise<Job[]> {
  const data = await DataService.get<Job[]>(`${JOBS_URLS.allJobs}`, {
    skip: `${skip}`,
    limit: `${limit}`,
    is_hot: `${is_hot}`,
    allow_for_translated_jobs: `${allow_for_translated_jobs}`,
  });
  return data;
}

export async function getJobById(jobId: string): Promise<Job> {
  if (!jobId) {
    // can return 404 heres
    return {} as Job;
  }
  const data = await DataService.get<Job>(`${JOBS_URLS.singleJob}/${jobId}`);
  return data;
}
// export async function updateJob(jobId: string): Promise<Job> {
//   if (!jobId) {
//     // can return 404 heres
//     return {} as Job;
//   }
//   const data = await DataService.put<Job>(`${JOBS_URLS.updateJob}/${jobId}`);
//   return data;
// }
export async function deleteJob(jobId: string): Promise<Job> {
  if (!jobId) {
    // can return 404 heres
    return {} as Job;
  }
  const data = await DataService.delete<Job>(`${JOBS_URLS.deleteJob}/${jobId}`);
  return data;
}

export const postJobListing = (body: PostJobWorkerInputData): Promise<PostJobWorkerInputData> =>
  DataService.post<PostJobWorkerInputData>(JOBS_URLS.postJob, body);

export const findSimilarJobs = (jobId: string): Promise<Job[]> => {
  const body = {
    filter: '',
  };
  console.log(
    `Request to: ${DataService.post<Job[]>(`${JOBS_URLS.similarJobs}/${jobId}`, body, {
      collection_name: process.env.JOBS_COLLECTION_NAME as string,
    })}`
  );
  return DataService.post<Job[]>(`${JOBS_URLS.similarJobs}/${jobId}`, body, {
    collection_name: process.env.JOBS_COLLECTION_NAME as string,
  });
};
