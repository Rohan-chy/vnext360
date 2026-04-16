import { z } from 'zod';

// ---------------- Schema ----------------
export const OrganizationRegistrationSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters'),

  companyName: z
    .string()
    .min(2, 'Organization Name must be at least 2 characters')
    .max(100, 'Organization Name must be at most 100 characters'),

  email: z.string().min(1, 'Email is required').email('Invalid email address'),

  phoneNumber: z
    .string()
    .length(10, 'Contact Number must be 10 digits.')
    .regex(/^\d+$/, 'Contact Number must contain only digits'),

  address: z
    .string()
    .min(5, 'Address must be at least 5 characters')
    .max(200, 'Address must be at most 200 characters'),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(32, 'Password must be at most 32 characters'),
});

// ---------------- Types ----------------
export type OrganizationRegistrationFormValues = z.infer<
  typeof OrganizationRegistrationSchema
>;
