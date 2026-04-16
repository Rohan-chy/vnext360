import { z } from 'zod';

export const clinicSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Name is required'),

  location: z.string().min(1, 'Location is required'),

  type: z.string().min(1, 'Type is required'),

  pan: z
    .string()
    .min(5, 'PAN must be at least 5 digits')
    .regex(/^\d+$/, 'PAN must contain only digits'),

  contactNo: z
    .string()
    .min(1, 'Contact number is required')
    .regex(/^\d{10}$/, 'Contact number must be 10 digits'),

  manager: z.string().min(1, 'Manager name is required'),

  registrationNumber: z.string().min(1, 'Registration number is required'),

  registrationDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date',
  }),
  longitude: z.number().optional(),
  latitude: z.number().optional(),
});
