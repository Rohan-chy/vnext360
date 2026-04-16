import { z } from 'zod';

export const DoctorNomineeSchema = z.object({
  id: z.string().uuid().optional(),

  name: z.string().min(1, 'Nominee name is required'),

  relationship: z.string().min(1, 'Relationship is required'),

  contactNumber: z
    .string()
    .min(1, 'Contact number is required')
    .regex(/^[0-9]{7,15}$/, 'Invalid contact number'),
});

export const DoctorNomineeFormSchema = z.object({
  doctorNominees: z
    .array(DoctorNomineeSchema)
    .min(1, 'At least one nominee is required'),
});

export type DoctorNomineeFormValues = z.infer<typeof DoctorNomineeFormSchema>;

export type SaveNomineesPayload = {
  data: z.infer<typeof DoctorNomineeSchema>[];
};
