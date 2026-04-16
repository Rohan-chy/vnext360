import { z } from 'zod';

export const uploadClinicBulkImageSchema = z.object({
  clinicId: z.string().uuid('Invalid Clinic ID'),
  image: z
    .array(
      z
        .instanceof(File)
        .refine((file) => file instanceof File, { message: 'Invalid file' })
    )
    .optional()
    .or(z.undefined()),
});
