import { MouseEventHandler } from 'react';
import { AddJobListingData, GeneratedJobDetailData } from './zodTypes';

// Common Components
// button.tsx
export type ButtonVariantProps = {
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'outline-primary'
    | 'outline-secondary'
    | 'ghost'
    | 'link'
    | 'white-primary';
  size?: 'default' | 'full';
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  text?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

// input.tsx
export type InputVariantProps = {
  variant?: 'default' | 'primary' | 'secondary' | 'danger';
};

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, InputVariantProps {
  type?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onClickTrailing?: () => void | MouseEventHandler<HTMLButtonElement>;
}

export interface TextAreaProps extends InputProps {
  rows?: number;
}
// section-headers.tsx
export interface SectionHeaderProps {
  leadingIcon?: React.ReactNode;
  heading?: string;
  helpText?: string;
}

// Home.tsx
export interface Job {
  language?: string;
  title?: string;
  slug?: string;
  external_company_id?: number;
  city?: string;
  country?: string;
  employment_type?: string;
  work_location_type?: string;
  remuneration_from?: number;
  remuneration_to?: number;
  remuneration_currency?: string;
  short_description?: string;
  job_requirements?: string;
  welcomed_skills?: string;
  skill_tags?: string[];
  description?: string;
  is_hot?: boolean;
  is_external?: boolean;
  external_link?: string;
  external_company_logo?: string | null;
  external_company_name?: string | null;
  external_company_website?: string | null;
  external_company_industry?: string | null;
  external_company_size?: string | null;
  id_parent_job_translation?: number;
  parent_job?: Job;
  parent_language?: string;
  id: number;
  category?: {
    id: number;
    name?: string;
  };
  latitude?: number;
  longitude?: number;
  is_added_to_qdrant?: boolean;
  geo_resolve_tries?: number;
  is_dummy?: boolean;
  created?: string;
  updated?: string;
  viewed?: number;
  applicants?: number;
}

// job_list.tsx
export interface JobListProps {
  jobs: Job[];
}
// job_card.tsx
export interface JobProps {
  job: Job;
}

// JobCard.tsx
export interface JobCardProps {
  id: number;
  title: string;
  city: string;
  work_location_type: string;
  employment_type: string;
  category: {
    id: 0 | number;
    name: 'string' | string;
  };
  created: string;
  updated: string;
  slug?: string;
  external_company_logo: string | null;
  external_company_name: string | null;
  external_company_website: string | null;
  external_company_industry: string | null;
  external_company_size: string | null;
  applicants: number;
  companyLogo: string;
  isHot: boolean;
  isExternal: boolean;
  location: {
    hash?: string;
    key?: string;
    pathname?: string;
    search?: string;
    state?: unknown;
  };
  isApplied?: boolean;
  is_tailored?: boolean;
  score?: number;
}

// ExpandedJobCard.tsx

export interface ExpandedJobCardProps {
  id: number;
  expanded: boolean;
  score: number | undefined;
  setIsExpanded: (value: boolean) => void;
  location: {
    hash?: string;
    key?: string;
    pathname?: string;
    search?: string;
    state?: unknown;
  };
}

// badge.tsx
export type BadgeProps = {
  text?: string;
  color?: string;
  bgColor?: string;
};

// info-badge.tsx
export type InfoBadgeProps = {
  heading?: string;
  desc?: string | number;
};

// userStore.ts
export type UserData = {
  email: string;
  name: string;
  phone_number: string | null;
  country: string;
  city: string;
  profile_picture: string;
  selected_country?: string | null;
  online_status: string;
  is_recruiter?: boolean;
  timezone?: string | null;
  is_active?: boolean;
  is_staff?: boolean;
  is_admin?: boolean;
  is_superuser?: boolean;
  is_investor?: boolean;
  is_banned?: boolean;
  is_onboarded: boolean;
  ai_tokens_query_limit?: number;
  ai_tokens_consumed?: number;
  id?: number;
  uid?: string;
  latitude?: number | null;
  longitude?: number | null;
  geo_resolve_tries?: number;
  language?: string;
};
export interface Resume {
  cv_filepath: string;
  cv_url: string;
  created: string;
}

export type UserSettings = {
  dark_mode: boolean;
  email_notifications_enabled: boolean;
  jobsearch_filter: unknown | null; // You can replace 'any' with the specific type for your jobsearch_filter if known
  notification_frequency: 'immediate' | 'daily' | 'weekly'; // Adjusted to include possible values based on common notification frequencies
  id: number;
  candidate_id: number;
};

export interface CandidateData {
  skill_tags?: string[] | null;
  ai_skill_tags?: string[];
  ai_expertise?: string[];
  ai_cv_summary?: string;
  candidate_slug?: string;
  ai_objective?: string;
  id?: number;
  ai_education?: string | null;
  uploaded_resumes?: Resume[];
  headline?: string;
  ai_candidate_rank?: number;
  user_id?: number;
  objective?: string | null;
  ai_certificates_and_trainings?: string | null;
  created?: string;
  candidate_filter?: unknown | null;
  social?: {
    linkedin?: string | null;
    twitter?: string | null;
    github?: string | null;
  };
  ai_languages?: Record<string, string>;
  ai_social?: string | null;
  updated?: string;
  user?: {
    id: number;
    email: string;
    longitude: number | null;
    is_admin: boolean;
    updated: string;
    name: string;
    is_superuser: boolean;
    selected_country: string | null;
    phone_number: string | null;
    geo_resolve_tries: number;
    is_investor: boolean;
    online_status: string;
    is_banned: boolean;
    profile_picture: string;
    password: string;
    ai_tokens_query_limit: number;
    country: string;
    is_recruiter: boolean;
    language: string;
    timezone?: string | null;
    uid: string;
    city: string;
    is_active: boolean;
    ai_tokens_consumed: number;
    latitude: number | null;
    is_staff: boolean;
    is_social_login: boolean;
    created: string;
  };
}

export interface UserProfile {
  user_data: UserData;
  candidate_data: CandidateData;
  recruiter_data: unknown | null;
}

export interface defaultUserStore {
  user: UserProfile | null;
  accessToken: string | null;
  data: OnboardingData;
  post_job_language: string;
  socialRegistration: boolean;
  cvData: {
    cv: null | File;
    isCVUploaded: boolean;
    serverResponse: boolean;
  };
  steps: stepsType[];
}

export interface UserStore {
  user: UserProfile | null;
  accessToken: string | null;
  post_job_language: string;
  data: OnboardingData;
  socialRegistration: boolean;
  cvData: {
    cv: null | File;
    isCVUploaded: boolean;
    serverResponse: boolean;
  };
  steps: stepsType[];
  setUser: (user: UserProfile | null) => void;
  setAccessToken: (token: string | null) => void;
  setSteps: (step: stepsType) => void;
  resetSteps: () => void;
  setPostJobLanguage: (value: string) => void;
  setCV: (cv: File | null, isCVUploaded: boolean, server: boolean) => void;
  setOnboardingData: (key: string, value: boolean | File | null | string) => void;
  updateUser: (values: Partial<UserProfile>) => void;
  resetCVdata: () => void;
  setSocialRegistration: () => void;
  resetSocialRegistration: () => void;
  logout: () => void;
  reset: () => void;
}

export interface stepsType {
  step: number;
  isDone: boolean;
}

//Users
export type User = {
  email: string;
  name: string;
  company_id: null | number;
  phone_number: string;
  country: string;
  city: string;
  timezone: string;
  profile_picture: string;
  selected_country: string;
  online_status: 'Online' | 'Offline';
  ai_tokens_query_limit: number;
  ai_tokens_consumed: number;
  is_recruiter: boolean;
  is_onboard: boolean;
  is_social_login: boolean;
  last_active: string; // Should be a valid date string, e.g., "2024-04-24T20:29:20.106046"
  id: number;
  uid: string;
  latitude: number;
  longitude: number;
  geo_resolve_tries: number;
  language: string | null;
  prefered_language: string;
  is_active: boolean;
  is_staff: boolean;
  is_admin: boolean;
  is_superuser: boolean;
  is_investor: boolean;
  is_banned: boolean;
};

// auth.ts
export interface RegisterResProps {
  user: User;
  access_token: string;
  token_type: string;
}

export type RegisterBodyProps = {
  name: string;
  email: string;
  is_recruiter: boolean;
  is_social_login: boolean;
  password: string;
};
type SocialMediaLinks = {
  [key: string]: string;
};

export type RegisterCompanyBodyProps = {
  name: string;
  country: string;
  city: string;
  contact_name: string;
  email: string;
  phone_number: string;
  company_size: '1-10';
  prefered_language: string;
};

export type LoginResProps = {
  access_token: string;
  token_type: string;
};

export type LoginBodyProps = {
  username: string;
  password: string;
};

//Recruiters
export type Recruiter = {
  user: User;
  companyId: string | number;
  phoneNumber: string;
  calendly_link: string;
  id: number | string;
  user_id: number | string;
};

export type CandidateRawData = {
  raw_txt_cv: string;
  truncated_txt_cv: string;
  id: number;
  candidate_id: number;
};

export type MissingCandidates = {
  id: number;
  country: string;
  city: string;
};
//AIPoweredAccordionItem.tsx

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

//Candidates.tsx
export interface PaginationProps {
  total: number;
  current: number;
  onPageChange: (page: number) => void;
}

//api.ts

export interface JobsParams {
  country?: string;
  skip: number;
  limit: number;
  is_hot?: boolean;
  language?: string;
  allow_for_translated_jobs: boolean;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginGoogleData {
  token: string;
}

export interface UploadCVPayload {
  user_id: number;
  cv: File | string;
}

export type UploadCVResponse = {
  message: string;
};

export interface ClickedJobRequest {
  job_id: number;
}

export interface ClickedJobResponse {
  job_id: number;
  id: number;
}
export type Subscriber = {
  id: number | string;
  email: string;
};
export type SubscribeBody = {
  email: string;
};
export type HealthCheck = {
  status: string;
  message: string;
};

// Params Type
export interface EntitySlugParams {
  slug: string;
}

// Response Type (You may want to adjust this based on your API's response)
export interface EntitySlugResponse {
  candidate?: number;
}

// Define the type for the input data
export interface PostJobWorkerInputData {
  title: string;
  city: string;
  country: string;
  category: string;
  short_description: string;
  job_requirements: string;
  description: string;
  welcomed_skills: string;
  skill_tags: string[];
  remuneration_from: number;
  remuneration_to: number;
  remuneration_currency: string;
  employment_type: string;
  work_location_type: string;
  language: string;
  external_company_id?: number;
  id_hot?: boolean;
  is_external?: boolean;
  external_link?: string;
  user_id?: number;
  is_dummy?: boolean;
}
export type InboxMessage = {
  id: number;
  user_id: number;
  content: string;
  created: string; // Should be a valid date string, e.g., "2024-04-27T23:49:31.027Z"
  seen_at: string; // Should be a valid date string, e.g., "2024-04-27T23:49:31.027Z"
  read: boolean;
};
export type Notification = {
  content: unknown;
  id: number | string;
  created: string;
  seen: string;
  user_id: number | string;
};
export interface PostJobWorkerResponse {
  id: string;
  result: string;
  state: string;
}

export interface TailoredUserJobsParams {
  candidate_id: number;
  country?: string;
  collection_name?: string;
  with_payload?: boolean;
  with_vectors?: boolean;
  min_score?: number;
  skip?: number;
  limit?: number;
  must?: Array<{
    key: string;
    match: {
      value: string;
    };
  }>;
}

export interface TailoredUsersJobsResponse {
  id: number;
  score: number;
  payload: {
    applicants: number;
    category: {
      id: 0 | number;
      name: 'string' | string;
    };
    city: string;
    external_company_id: number;
    country: string;
    created: string;
    description: string;
    employment_type: string;
    external_link: string;
    geo_resolve_tries: number;
    id: number;
    id_parent_job_translation: null;
    is_added_to_qdrant: boolean;
    is_dummy: boolean;
    is_external: boolean;
    external_company_logo: null | string;
    external_company_name: string;
    external_company_website: string;
    external_company_industry: string;
    external_company_size: string;
    is_hot: boolean;
    job_post_id: number;
    job_requirements: string;
    language: string;
    latitude: null | number; // If this can have other data types, replace number with the type
    location: {
      lat: number;
      lon: number;
    };
    longitude: null | number; // If this can have other data types, replace number with the type
    parent_job: Job | null;
    parent_language: null;
    remuneration_currency: string;
    remuneration_from: number;
    remuneration_to: number;
    short_description: string;
    skill_tags: string[];
    slug: string;
    title: string;
    updated: string;
    viewed: number;
    welcomed_skills: string;
    work_location_type: string;
  };
  vector: null;
}

export interface Company {
  city: string;
  country: string;
  created: string;
  description: string;
  employee_count: number;
  founded_date: string;
  id: number;
  job_openings_active: number;
  job_openings_total: number;
  logo_url: string;
  name: string;
  promoted: boolean;
  promotion_duration_days: number;
  promotion_ends: string;
  recruiters: number;
  social_media_links: null;
  updated: string;
  website: string;
}

// company-card.tsx
export interface CompanyCardProps {
  name: string;
  logo_url: string;
  description: string;
}

// companies-list.tsx
export interface CompaniesListProps {
  companies: CompanyCardProps[];
}

export interface Country {
  default_language: string;
  flag_icon: string;
  id: number;
  default_currency: string;
  currencies: string[];
  languages: string[];
  name: string;
  order_in_the_menu: number;
}

export interface CountryStore {
  countries: Country[];
  selectedCountry: Country | null;
  languageOnboarding: string;
  selectCountry: (country: Country) => void;
  unselectCountry: () => void;
  setCountries: (countries: Country[]) => void;
  selectLanguage: (language: string) => void;
  resetLanguageOnboarding: () => void;
}

//GeneratedJobDetail.tsx

export interface JobParamsSlug {
  slug: string;
}

export interface AppState {
  state: string;
}

export type AppAction = { type: 'append'; payload: string } | { type: 'reset'; payload: string };

//Dropdown.tsx
export interface DropDownProps {
  isOpen: boolean;
  data: Country[];
  handleToggle: (value: boolean) => void;
}

//ApplyForm.tsx
export interface ApplyFormProps {
  jobId: number;
  jobTitle: string;
  score: number | undefined;
  isApplied: boolean;
  handleApplied: () => void;
}

//FormToggleButtons.tsx
export interface FormToggleButtonsProps {
  isCandidate: boolean;
  toggleUser: () => void;
}

export interface GoogleDataSetter {
  setGoogleData: (data: GoogleData) => void;
}

export interface GoogleDataProps {
  googleData: GoogleData;
  handleGoogleData: (data: GoogleData) => void;
}

export interface GoogleData {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;
  sub: string;
}

//Navigation.tsx
export interface NavigationProps {
  links: { name: string; link: string }[];
  open: boolean;
  setNavigationOpen: (value: boolean) => void;
  onLinkClick: () => void;
}

export interface Country {
  default_language: string;
  flag_icon: string;
  id: number;
  languages: string[];
  name: string;
  order_in_the_menu: number;
}

//ProfileDropdown.tsx
export interface ProfileDropdownProps {
  setNavigationOpen: (value: boolean) => void;
}

export interface Language {
  name: string;
  icon: string;
}

//DislikeButton.tsxs
export interface DislikeButtonProps {
  isDisliked?: boolean;
  onToggle?: (disliked: boolean) => void;
}

//LikeButton.tsx
export interface LikeButtonProps {
  isLiked?: boolean;
  onToggle?: (liked: boolean) => void;
}

//AddJobListing.tsx
export interface AddJobListingProps {
  onNext: (formData: AddJobListingData) => void;
}

//ApplicationSuccess.tsx
export interface JobConfirmationProps {
  jobTitle: string;
  companyName?: string;
}

//FAQs.tsx
export interface FAQItem {
  question: string;
  answer: string;
}

//GeneratedJobDetail.tsx
export interface GeneratedJobDetailProps {
  jobData: GeneratedJobDetailData;
  onNext: (formData: GeneratedJobDetailData) => void;
}

//Media.tsx
export interface MediaItem {
  src: string;
  alt: string;
}

//SkillTag.tsx
export interface SkillTagProps {
  skill: string;
}

//ContactsProps.tsx
export interface ContactsProps {
  updateStep: (direction: 1 | -1, skip?: boolean) => void;
}

//FilterJobsProps.tsx
export interface FilterJobsProps {
  updateStep: (direction: 1 | -1, skip?: boolean) => void;
}

//Finish.tsx
export interface FinishProps {
  updateStep: (direction: 1 | -1, skip?: boolean) => void;
}

//Intro.tsx
export interface IntroProps {
  updateStep: (direction: 1 | -1, skip?: boolean) => void;
}

//Language.tsx
export interface LanguageProps {
  updateStep: (direction: 1 | -1, skip?: boolean) => void;
}

//UploadCV.tsx
export interface UploadCVProps {
  updateStep: (direction: 1 | -1, skip?: boolean) => void;
}

//Step.tsx
export interface StepProps {
  step: number;
  name: string;
  isCurrent?: boolean;
  isDone?: boolean;
}

//AboutMePublic.tsx
export interface AboutMePublicProps {
  ai_objective: string;
  ai_cv_summary: string;
  ai_expertise: string[];
  ai_skill_tags: string[];
}

//ProfileCardPublic.tsx
export interface ProfileCardPublicProps {
  name: string;
  headline: string;
  profile_picture: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  online_status: string;
  is_active: boolean;
  is_staff: boolean;
  city: string;
  country: string;
  timezone: string;
  email: string;
  phone_number: string;
  slug: string;
  ai_tokens_consumed: number;
  uploaded_resumes: [
    {
      created: string;
      cv_filepath: string;
      cv_url: string;
    },
  ];
}

//EditAboutMe.tsx
export interface EditAboutMeProps {
  setIsEditing: (value: boolean) => void;
}

//EditProfileCard.tsx
export interface EditProfileCardProps {
  setIsEditing: (value: boolean) => void;
}

//JobCard.tsx
export type ImageLoadEvent = React.SyntheticEvent<HTMLImageElement, Event>;

//CandidateCard.tsx
export interface CandidateProps {
  name: string;
  avatarUrl: string;
  description: string;
  skills: string[];
  position: string;
  experience: string;
  location: string;
  portfolioUrl: string;
  resumeUrl: string;
}

export interface ScrollableWordsProps {
  words: string[];
}

//GeneratedJobDetail.tsx GeneratedJobDetailSocket.ts

export type AppendTextReducerAction = AppAction;

export type AppendTextReducer = (state: string, action: AppendTextReducerAction) => string;

export type SetCurrentServiceIndexFunction = React.Dispatch<React.SetStateAction<number>>;

export type SetReceivedTextFunction = React.Dispatch<React.SetStateAction<string>>;

export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export type ServicesType = [CurrentServiceType];

// Assuming services is an array of strings, replace with the actual type
type CurrentServiceType = string;

export type SocketData = {
  title?: string;
  language?: string;
  description?: string;
  candidate_data?: {
    candidate_id?: string;
  };
};

export type SocketRefType = {
  current: WebSocket | null;
};

//post.ts
/*
type  AllowedKeys = 
| "summary"
| "job_requirements"
| "detailed_description"
| "welcomed_skills"
| "skill_tags"
| "category"
| "title"
| "city"
| "country"
| "language"
| "employment_type"
| "work_location_type"
| 'empty'
*/

export type KeyValueObject = {
  key: any;
  value: string | string[];
};

//ApplyContext.ts
export interface LetterContextType {
  letter: string;
}

export interface ApplyContextType extends LetterContextType {
  handleLetterValue: (text: string) => void;
}

//GeneratedJobContext.ts
export interface GeneratedJobStore {
  summary: string;
  JobRequirements: string;
  DetailedDescription: string;
  WelcomedSkills: string;
  skillTags: string[];
}

// Create a context with the initial store
export interface GeneratedContextProps {
  store: GeneratedJobStore;
  updateStore: (value: string, index: number) => void;
}

//CandidateForm.tsx
export interface PasswordData {
  password: string;
  showPassword: boolean;
  confirmPassword: string;
  showConfirmPassword: boolean;
}

export interface CustomEvent {
  name: string;
  value: string | boolean;
}

export interface CandidatesFormData {
  name: string;
  email: string;
  password: string;
  is_social_login: boolean;
  profile_picture: string;
}

export interface CompanyFormData {
  company_name: string;
  contact_name: string;
  company_email: string;
  company_phone_number: string;
  employees_count: string;
  company_country: string;
  company_city: string;
  preferred_language: string;
}

//userStore.ts

export type OnboardingData = {
  is_terms_agreed: boolean | null;
  country: string;
  full_time: boolean;
  part_time: boolean;
  freelance: boolean;
  volunteer: boolean;
  on_site: boolean;
  remote: boolean;
  city: string;
  timezone: string;
  hybrid: boolean;
  phone: string;
  linkedin: string;
  twitter: string;
  github: string;
  language: string;
};

//FilterJobs.tsx
export interface storePushObject {
  [key: string]: string | boolean | null;
}

export interface FilterJobsSubmitObject {
  country: string;
  radius: string | null;
  full_time: boolean;
  part_time: boolean;
  freelance: boolean;
  on_site: boolean;
  volunteer: boolean;
  remote: boolean;
  hybrid: boolean;
  [key: string]: string | boolean | null;
}

export interface ContactsSubmitObject {
  linkedin: string;
  twitter: string;
  github: string;
  [key: string]: string | boolean | File | null;
}

//Contacts.tsx

export interface ContactsError {
  linkedin: boolean;
  twitter: boolean;
  github: boolean;
}

//api.ts
export interface languageStep {
  prefered_language: string;
  timezone: string;
}

//AIPoweredInsights
export interface recommendations {
  job_market_insights: { text: string } | null;
  cv_optimization_suggestions: { text: string } | null;
  skill_gap_analysis: { text: string } | null;
  certification_suggestions: { text: string } | null;
  personal_branding: { text: string } | null;
  career_advice: { text: string } | null;
  overall_assessment: { text: string } | null;
  career_achievements: { text: string } | null;
}

export type GenericResponse = {
  code: number;
  result: any;
  meta: any;
};
