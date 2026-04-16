import { z } from 'zod';

export const patientProfileImageSchema = z.object({
  // patientId: z.string().optional(),
  patientId: z.string().uuid('Invalid patient ID'),
  image: z.instanceof(File).nullable().optional(),
});

export type PatientProfileImageFormValues = z.infer<
  typeof patientProfileImageSchema
>;
