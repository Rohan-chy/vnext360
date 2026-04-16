import { z } from 'zod';

export const uploadDoctorCategoryImageSchema = z.object({
  id: z.string().optional(),
  doctorCategoryId: z.string().uuid('Invalid DoctorCategory ID'),
  image: z
    .any()
    .refine((file) => file instanceof File || file === undefined, {
      message: 'Invalid file',
    })
    .optional(),
});

export type uploadDoctorCategoryImageFormValues = z.infer<
  typeof uploadDoctorCategoryImageSchema
>;
