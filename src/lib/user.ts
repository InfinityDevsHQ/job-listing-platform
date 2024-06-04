'use server';
import { ApplyJobResponse, UserData, UserProfile } from '@/types/types';
import { getToken } from './auth-token';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const USER_URLS = {
  user: `${PLATFORM_API_BASE_URL}/api/v1/user`,
  userProfile: `${PLATFORM_API_BASE_URL}/api/v1/user/profile`,
  userInbox: `${PLATFORM_API_BASE_URL}/api/v1/slugify/entity/slug`,
  userNotifications: `${PLATFORM_API_BASE_URL}/api/v1/slugify/entity/slug`,
  userJobsAppliedFor: `${PLATFORM_API_BASE_URL}/api/v1/user/notifications`,
  userJobsClicked: `${PLATFORM_API_BASE_URL}/api/v1/user/jobs/clicked`,
  userJobsFavorited: `${PLATFORM_API_BASE_URL}/api/v1/user/jobs/favorited`,
  userJobsDisabled: `${PLATFORM_API_BASE_URL}/api/v1/user/jobs/disliked`,
  userUpdate: `${PLATFORM_API_BASE_URL}/api/v1/user`,
  updateProfile: `${PLATFORM_API_BASE_URL}/api/v1/user/profile`,
  applyJob: `${PLATFORM_API_BASE_URL}/api/v1/user/job/apply`,
};

const Profile: UserProfile = {
  user_data: {
    id: 27,
    uid: 'ad275be7-c22c-47ea-aa28-0825cc842404',
    email: 'hello@infinitydevs.io',
    name: 'Infinity Devs',
    company_id: null,
    phone_number: '+1 (439) 951-6882',
    profile_picture: '/assets/avatar.png',
    language: null,
    prefered_language: 'Slovak',
    country: 'Ireland',
    city: 'Ut est sint est tot',
    timezone: '(GMT-06:00) Central Time (US & Canada)',
    latitude: null,
    longitude: null,
    geo_resolve_tries: 0,
    password: '$2b$12$ktBBi2726j2VuwFzPvTLAuSRFQOfwX8XS7Jfw.tY44YsMgj9N/r5i',
    is_recruiter: false,
    is_active: true,
    is_staff: false,
    is_admin: false,
    is_superuser: false,
    is_investor: false,
    is_banned: false,
    is_onboarded: true,
    is_social_login: false,
    ai_tokens_query_limit: -1,
    ai_tokens_consumed: 0,
    created: '2024-05-28T15:38:59.982067',
    updated: '2024-05-29T08:48:35.779806',
    last_active: '2024-05-29T08:48:35.782998',
    selected_country: 'Ireland',
    online_status: 'Offline',
  },
  candidate_data: {
    id: 26,
    user_id: 27,
    candidate_slug: 'infinity-devs',
    headline: null,
    seniority: null,
    social: {
      linkedin: 'http://localhost:3000/onboarding',
      twitter: 'http://localhost:3000/onboarding',
      github: 'http://localhost:3000/onboarding',
    },
    bio: 'Software Engineer',
    ai_objective:
      'Aspiring to leverage my extensive experience in software development and project management to lead a dynamic tech team at a forward-thinking company, contributing to innovative projects and achieving organizational goals.',
    ai_cv_summary:
      'A highly skilled software engineer with over 8 years of experience in developing high-quality applications. Proficient in multiple programming languages including JavaScript, Python, and Java. Adept at working in agile environments, managing projects, and mentoring junior developers. Committed to continuous learning and improvement, with a strong track record of successful project delivery and problem-solving.',
    ai_expertise: [
      'Full-Stack Development',
      'Agile Project Management',
      'Cloud Computing (AWS, Azure)',
      'Microservices Architecture',
      'DevOps Practices',
      'Database Management (SQL, NoSQL)',
    ],
    skill_tags: ['JavaScript', 'Python', 'Java', 'C++', 'React', 'Angular', 'Django'],
    uploaded_resumes: null,
    is_profile_bio_ready: false,
    is_unable_to_process_cv: false,
    created: '2024-05-28T15:39:00.139651',
    updated: '2024-05-29T08:48:35.799769',
  },
  recruiter_data: null,
};

export const getUser = async (): Promise<UserData> => Profile.user_data;

export async function getUserProfile(): Promise<UserProfile> {
  const isLoggedIn = getToken();
  if (!isLoggedIn) {
    return {} as unknown as UserProfile;
  }
  return Profile;
}
export async function getUserInbox(): Promise<{}> {
  const data = await DataService.get<{}>(`${USER_URLS.userInbox}`);
  return data;
}

export async function getUserNotifications(): Promise<{}> {
  const data = await DataService.get<{}>(`${USER_URLS.userNotifications}`);
  return data;
}
export async function getUserJobsAppliedFor(): Promise<{}> {
  const data = await DataService.get<{}>(`${USER_URLS.userJobsAppliedFor}`);
  return data;
}
export async function getUserJobsClicked(): Promise<{}> {
  const data = await DataService.get<{}>(`${USER_URLS.userJobsClicked}`);
  return data;
}
export async function getUserJobsFavorited(): Promise<{}> {
  const data = await DataService.get<{}>(`${USER_URLS.userJobsFavorited}`);
  return data;
}
export async function getUserJobsDisabled(): Promise<{}> {
  const data = await DataService.get<{}>(`${USER_URLS.userJobsDisabled}`);
  return data;
}
export async function updateUserProfile(body: UserProfile) {
  const data = await DataService.put<UserProfile>(USER_URLS.userUpdate, body);
  return data;
}

export async function updateProfile(body: UserProfile) {
  const data = await DataService.put<UserProfile>(USER_URLS.updateProfile, body);
  console.log({ data });
  return data;
}

export async function applyForJob(jobId: string): Promise<ApplyJobResponse> {
  const data = await DataService.post<ApplyJobResponse>(`${USER_URLS.applyJob}`, {
    job_id: `${jobId}`,
  });
  return data;
}
