import { z } from 'zod';

export const registerSchema = z
  .object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email(),
    userName: z.string().min(3),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    phoneNumber: z.string().min(10),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
