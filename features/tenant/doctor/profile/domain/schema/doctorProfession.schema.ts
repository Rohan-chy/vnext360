import { z } from 'zod';

export const DoctorProfessionalSchema = z.object({
  doctorCategoryId: z
    .string()
    .min(1, 'Doctor speciality is required')
    .uuid('Invalid Doctor speciality'),

  doctorSubCategoryId: z
    .string()
    .min(1, 'Doctor sub-speciality is required')
    .uuid('Invalid Doctor Sub speciality'),

  registrationNumber: z
    .string()
    .min(1, 'NMC No. is required')
    .max(50, 'NMC No. must be at most 50 characters'),

  briefBio: z
    .string()
    .max(500, 'Brief bio must be at most 500 characters')
    .optional(),
});

export type DoctorProfessionalFormValues = z.infer<
  typeof DoctorProfessionalSchema
>;
