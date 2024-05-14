import { z } from "zod";
export const filterJobsFormSchema = z.object({
  employmentType: z.enum(["Full time", "Part-Time", "Freelance", "Volunteer"]),
  collaborationType: z.enum(["On Site", "Remote", "Hybrid"]),
});
