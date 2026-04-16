import { z } from 'zod';

export const updateClinicImageSchema = z.object({
  clinicId: z.string().uuid('Invalid Clinic ID'),
  image: z
    .any()
    .refine((file) => file instanceof File || file === undefined, {
      message: 'Invalid file',
    })
    .optional(),
});
