import { z } from 'zod';

export const patientRelativeSchema = z.object({
  id: z.string().optional(),

  title: z.string().optional(),

  firstName: z.string().min(1, 'First name is required'),

  middleName: z.string().optional(),

  lastName: z.string().min(1, 'Last name is required'),

  relationship: z.string().min(1, 'Relationship is required'),

  contactNumber: z.string().min(1, 'Contact number required'),

  countryCode: z.string().min(1, 'Country code required'),
});

export const patientRelativesSchema = z.object({
  data: z.array(patientRelativeSchema),
});

export type PatientRelativesFormValues = z.infer<typeof patientRelativesSchema>;
