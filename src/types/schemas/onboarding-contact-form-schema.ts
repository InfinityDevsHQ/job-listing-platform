import { z } from "zod";
export const onBoardingContactFormSchema = z.object({
  phoneNumber: z
    .string()
    .min(6, { message: "Phone number must be at least 6 characters long" }),
  linkedin: z.string().url({ message: "Invalid LinkedIn URL" }),
  twitter: z.string().url({ message: "Invalid Twitter URL" }),
  github: z.string().url({ message: "Invalid GitHub URL" }),
});
