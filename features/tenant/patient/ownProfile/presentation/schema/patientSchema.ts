import { z } from 'zod';

export const patientSchema = z.object({
  title: z.string().min(1),
  firstName: z.string().min(1),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
  gender: z.number(),
  dateOfBirth: z.string(),
  dateOfBirthNp: z.string().optional(),
  email: z.string().email(),
});
