import { z } from "zod";
export const registerDataSchema = z.object({
  tab: z.union([z.literal("Company"), z.literal("Candidate")]),
  username: z.string(),
  email: z.string().email({ message: "Email must be valid" }),
  passwordOne: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  passwordTwo: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  company: z.string(),
  contactName: z.string(),
  workMail: z.string().email({ message: "Work email must be valid" }),
  phoneNumber: z.string(),
  city: z.string(),
});
