import { z } from "zod";
export const registerCompanyFormSchema = z.object({
  company: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters long" }),
  contactName: z
    .string()
    .min(2, { message: "Contact name must be at least 2 characters long" }),
  workMail: z.string().email({ message: "Work email must be valid" }),
  phoneNumber: z
    .string()
    .min(6, { message: "Phone number must be at least 6 characters long" }),
  city: z
    .string()
    .min(2, { message: "City name must be at least 2 characters long" }),
});
