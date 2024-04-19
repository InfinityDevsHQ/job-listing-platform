import { z } from "zod";
export const termsAndConditionsFormSchema = z.object({
  termsAgreed: z.literal(true),
});
