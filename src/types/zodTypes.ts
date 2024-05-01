import { z } from 'zod';

//ApplyForm.tsx
export const ApplyFormDataSchema = z.object({
  cover_letter: z.string().min(1, { message: 'Cover letter is required' }),
  skill_tags: z.array(z.string()),
  cv: z.any().refine((file) => file instanceof FileList && file.length > 0, {
    message: 'A file must be uploaded.',
    path: ['cv'], // Pointing the error to the 'cv' field
  }),
});

export type ApplyFormData = z.infer<typeof ApplyFormDataSchema>;

//SignInForm.tsx
export const SignInDataSchema = z.object({
  email: z.string().email({ message: 'Email must be valid' }),
  password: z.string().min(1, { message: 'Password must be at least 8 characters long' }),
});

export type SignInData = z.infer<typeof SignInDataSchema>;

//AddJobListing.tsx
export const AddJobListingDataSchema = z
  .object({
    title: z
      .string()
      .min(2, 'Title should have at least 2 characters.')
      .max(99, 'Title should not exceed 99 characters.'),
    city: z
      .string()
      .nonempty('City cannot be empty.')
      .max(50, 'City should not exceed 50 characters.'),
    country: z.string().refine((value) => value !== '-', { message: 'Must be selected.' }),
    language: z.string(),
    employment_type: z.enum([
      'Full-time',
      'Part-time',
      'Contract',
      'Volunteer',
      'Seasonal',
      'Freelance',
    ]),
    work_location_type: z.enum(['On-site', 'Remote', 'Hybrid']),
    remuneration_from: z
      .string()
      .nonempty('Cannot be empty.')
      .optional()
      .transform((value) => (value && value.trim() !== '' ? parseInt(value, 10) : null))
      .refine((value) => value === null || value >= 0, 'Cannot be negative.'),
    remuneration_to: z
      .string()
      .nonempty('Cannot be empty.')
      .optional()
      .transform((value) => (value && value.trim() !== '' ? parseInt(value, 10) : null))
      .refine((value) => value === null || value >= 0, 'Cannot be negative.'),
    remuneration_currency: z.string(),
    description: z
      .string()
      .nonempty('Description cannot be empty.')
      .max(4096, 'Description should not exceed 4096 characters.'),
  })
  .refine(
    (data) => {
      if (data.remuneration_from && data.remuneration_to) {
        return data.remuneration_from <= data.remuneration_to;
      }
      return true;
    },
    {
      message: 'remuneration from must be smaller.',
      path: ['remuneration_from'],
    }
  );

export type AddJobListingData = z.infer<typeof AddJobListingDataSchema>;

//ApplicationSuccess.tsx
export const FormDataSchema = z.object({
  start: z.enum(['Immediately', 'Within a week', 'Later on']),
  salary: z
    .string()
    .nonempty('Salary cannot be empty.')
    .optional()
    .transform((value) => (value && value.trim() !== '' ? parseInt(value, 10) : null))
    .refine((value) => value === null || value >= 0, 'Cannot be negative.'),
  currency: z.string(),
  payment_duration: z.enum(['Month', 'Hour']),
});

export type FormData = z.infer<typeof FormDataSchema>;

//GeneratedJobDetail.tsx
export const GeneratedJobDetailDataSchema = z
  .object({
    title: z
      .string()
      .min(2, 'Title should have at least 2 characters.')
      .max(130, 'Title should not exceed 130 characters.'),
    city: z
      .string()
      .nonempty('City cannot be empty.')
      .max(50, 'City should not exceed 50 characters.'),
    country: z.string().refine((value) => value !== '-', { message: 'Must be selected.' }),
    language: z.string(),
    employment_type: z.enum([
      'Full-time',
      'Part-time',
      'Contract',
      'Volunteer',
      'Seasonal',
      'Freelance',
    ]),
    work_location_type: z.enum(['On-site', 'Remote', 'Hybrid']),
    remuneration_from: z.number().min(0, 'Cannot be negative.'),
    remuneration_to: z.number().min(0, 'Cannot be negative.'),
    remuneration_currency: z.string(),
    description: z.string(),
    // Extended fields
    summary: z.string(),
    job_requirements: z.string(),
    detailed_description: z.string(),
    welcomed_skills: z.string(),
    skill_tags: z.array(z.string()),
    category: z.string(),
  })
  .refine(
    (data) => {
      if (data.remuneration_from && data.remuneration_to) {
        return data.remuneration_from <= data.remuneration_to;
      }
      return true;
    },
    {
      message: 'remuneration from must be smaller.',
      path: ['remuneration_from'],
    }
  );

export type GeneratedJobDetailData = z.infer<typeof GeneratedJobDetailDataSchema>;

//Contacts.tsx
export const ContactsSchema = z.object({
  phone: z.string(),
  linkedIn: z.union([
    z.string().url({ message: 'URL must include https://' }),
    z.literal(''),
    z.undefined(),
  ]),
  twitter: z.union([
    z.string().url({ message: 'URL must include https://' }),
    z.literal(''),
    z.undefined(),
  ]),
  github: z.union([
    z.string().url({ message: 'URL must include https://' }),
    z.literal(''),
    z.undefined(),
  ]),
});

//FilterJobs.tsx
export const FilterJobsSchema = z.object({
  country: z.string(),
  radius: z
    .string()
    .optional()
    .transform((value) => (value ? parseInt(value, 10) : null))
    .refine((value) => value === null || value >= 0, 'Radius cannot be negative.'),
  fulltime: z.boolean(),
  volunteer: z.boolean(),
  parttime: z.boolean(),
  freelance: z.boolean(),
  onsite: z.boolean(),
  remote: z.boolean(),
  hybrid: z.boolean(),
});

//Language.tsx
export const LanguageSchema = z.object({
  language: z.enum(['English', 'Slovak', 'Czech', 'French', 'German']),
});

//UploadCV.tsx
export const uploadCVDataSchema = z.object({
  cv: z.any().refine((file) => file instanceof FileList && file.length > 0, {
    message: 'A file must be uploaded.',
    path: ['cv'], // Pointing the error to the 'cv' field
  }),
});

export type uploadCVData = z.infer<typeof uploadCVDataSchema>;

//EditAboutMe.tsx
export const EditAboutMeDataSchema = z.object({
  ai_objective: z.string().min(1, { message: 'Objective is required' }),
  ai_cv_summary: z.string().min(1, { message: 'Summary is required' }),
  ai_expertise: z.string().min(1, { message: 'Expertise is required' }),
  ai_skill_tags: z.string().min(1, { message: 'Skill tags are required' }),
});

export type EditAboutMeData = z.infer<typeof EditAboutMeDataSchema>;

//EditProfileCard.tsx
const phoneNumberSchema = z.string();
export const EditProfileCardDataSchema = z.object({
  picture: z.any(),
  name: z.string(),
  headline: z.string(),
  status: z.enum(['Online', 'Invisible', 'Offline']),
  city: z.string(),
  country: z.string(),
  timezone: z.string(),
  email: z.string().email({ message: 'Email must be valid' }),
  phone: phoneNumberSchema,
  linkedIn: z.string().url({ message: 'Invalid Url' }),
  twitter: z.string().url({ message: 'Invalid Url' }),
  github: z.string().url({ message: 'Invalid Url' }),
  resume: z.any(),
});

export type EditProfileCardData = z.infer<typeof EditProfileCardDataSchema>;
