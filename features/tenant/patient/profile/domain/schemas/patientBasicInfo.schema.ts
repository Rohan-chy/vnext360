import { z } from 'zod';

export const patientBasicInfoSchema = z.object({
  id: z.string().optional(),

  title: z.string(),
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),

  gender: z.number(),

  dateOfBirth: z.string(),

  dateOfBirthNp: z.string().optional(),

  email: z.string().email().optional(),
});

export type PatientBasicInfoFormValues = z.infer<typeof patientBasicInfoSchema>;
