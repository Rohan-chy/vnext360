import { z } from 'zod';

export const DoctorRelativeSchema = z.object({
  id: z.string().uuid().optional(),

  name: z.string().min(1, 'Relative name is required'),

  relationship: z.string().min(1, 'Relation is required'),

  contactNumber: z
    .string()
    .min(1, 'Contact number is required')
    .regex(/^[0-9]{7,15}$/, 'Invalid contact number'),
});

export const DoctorRelativeFormSchema = z.object({
  doctorRelatives: z
    .array(DoctorRelativeSchema)
    .min(1, 'At least one relative is required'),
});

export type DoctorRelativeFormValues = z.infer<typeof DoctorRelativeFormSchema>;

export type SaveRelativesPayload = {
  data: z.infer<typeof DoctorRelativeSchema>[];
};
