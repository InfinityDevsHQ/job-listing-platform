import { z } from 'zod';
export const postJobFormSchema = z.object({
  jobTitle: z.string().min(2, { message: 'Job title must be at least 2 characters long' }),
  city: z.string().min(2, { message: 'City name must be at least 2 characters long' }),
  employment: z.string().min(2, { message: 'Employment type must be at least 2 characters long' }),
  country: z.string().min(2, { message: 'Country name must be at least 2 characters long' }),
  language: z.string().min(2, { message: 'Language name must be at least 2 characters long' }),
  remunerationRageStart: z
    .string()
    .min(1, { message: 'Remuneration range start must be specified' }),
  remunerationRageEnd: z.string().min(1, { message: 'Remuneration range end must be specified' }),
  currency: z.string().min(2, { message: 'Currency name must be at least 2 characters long' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters long' }),
});
