'use server';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const STAFF_URLS = {
  promoteJob: `${PLATFORM_API_BASE_URL}/api/v1/staff/promote/job`,
  demoteJob: `${PLATFORM_API_BASE_URL}/api/v1/staff/demote/job`,
  deleteJob: `${PLATFORM_API_BASE_URL}/api/v1/staff/delete/job`,
  removeExternalCompanyLogo: `${PLATFORM_API_BASE_URL}/api/v1/staff/external-company-logo/remove`,
  promoteCompany: `${PLATFORM_API_BASE_URL}/api/v1/staff/promote/company`,
};
export async function getPromoteJob(jobId: number): Promise<{}> {
  const data = await DataService.get<{}>(`${STAFF_URLS.promoteJob}`, {
    job_id: `${jobId}`,
  });
  return data;
}
export async function getDemoteJob(jobId: number): Promise<{}> {
  const data = await DataService.get<{}>(`${STAFF_URLS.demoteJob}`, {
    job_id: `${jobId}`,
  });
  return data;
}
export async function getDeleteJob(jobId: number): Promise<{}> {
  const data = await DataService.get<{}>(`${STAFF_URLS.deleteJob}`, {
    job_id: `${jobId}`,
  });
  return data;
}
export async function getRemoveExternalCompanyLogoByJobId(jobId: number): Promise<{}> {
  const data = await DataService.get<{}>(`${STAFF_URLS.removeExternalCompanyLogo}`, {
    job_id: `${jobId}`,
  });
  return data;
}
export async function getPromoteCompanyByJobId(jobId: number): Promise<{}> {
  const data = await DataService.get<{}>(`${STAFF_URLS.removeExternalCompanyLogo}`, {
    job_id: `${jobId}`,
  });
  return data;
}
