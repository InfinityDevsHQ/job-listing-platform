'use server';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;
// TODO: manage them into files all of these according to their work
const NEWSLETTER_URLS = {
  jobListingIdSlug: `${PLATFORM_API_BASE_URL}/api/v1/slugify/job_listing/slug`,
  jobListingSlug: `${PLATFORM_API_BASE_URL}/api/v1/slugify/job_listing`,
  entityBySlug: `${PLATFORM_API_BASE_URL}/api/v1/slugify/entity/slug`,
  slugByEntityNameAndId: `${PLATFORM_API_BASE_URL}/api/v1/slugify/entity`,
};

export async function getJobListingIdBySlug(slug: string): Promise<{}> {
  const data = await DataService.get<{}>(`${NEWSLETTER_URLS.jobListingIdSlug}/${slug}`);
  return data;
}
export async function getJobListingSlugByIdAndLanguage(language: string, id: string): Promise<{}> {
  const data = await DataService.get<{}>(`${NEWSLETTER_URLS.jobListingSlug}/${language}/${id}`);
  return data;
}
export async function getEntityBySlug(slug: string): Promise<{}> {
  const data = await DataService.get<{}>(`${NEWSLETTER_URLS.entityBySlug}/${slug}`);
  return data;
}
export async function getEntitySlugByEntityNameAndId(name: string, id: string): Promise<{}> {
  const data = await DataService.get<{}>(`${NEWSLETTER_URLS.slugByEntityNameAndId}/${name}/${id}`);
  return data;
}
