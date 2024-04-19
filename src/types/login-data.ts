import { z } from "zod";
export type LoginFormData = {
  email: string;
  password: string;
  remember: boolean;
};
export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  remember: z.boolean(),
});
