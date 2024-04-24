import { z } from 'zod';

export const uploadCVDataSchema = z.object({
  imgUrl: z.string().min(8, { message: 'Please Select a file first' }),
});
