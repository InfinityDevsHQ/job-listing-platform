import { z } from "zod";
export const locationFormSchema = z.object({
  preferLanguage: z
    .string()
    .min(2, {
      message: "Preferred language must be at least 2 characters long",
    }),
  timeZone: z
    .string()
    .min(2, { message: "Time zone must be at least 2 characters long" }),
  country: z
    .string()
    .min(2, { message: "Country name must be at least 2 characters long" }),
  city: z
    .string()
    .min(2, { message: "City name must be at least 2 characters long" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
