import { z } from "zod";
export const registerCandidateFormSchema = z
  .object({
    username: z
      .string()
      .min(2, { message: "Username must be at least 2 characters long" }),
    email: z.string().email({ message: "Email must be valid" }),
    passwordOne: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    passwordTwo: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
  })
  .refine((data) => data.passwordOne === data.passwordTwo, {
    message: "Passwords don't match",
    path: ["confirm"],
  });
