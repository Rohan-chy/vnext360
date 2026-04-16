import { z } from 'zod';

export const patientAdditionalInfoSchema = z.object({
  profession: z.string().optional(),

  ethnicity: z.string().optional(),

  emergencyContactNo: z.string().optional(),

  religion: z.string().optional(),

  bloodGroup: z.string().optional(),
});

export type PatientAdditionalInfoFormValues = z.infer<
  typeof patientAdditionalInfoSchema
>;
