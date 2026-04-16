import { z } from 'zod';

export const resetPasswordSchema = z
  .object({
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Invalid email address'),

    password: z.string().min(6, 'Password must be at least 6 characters'),

    confirmPassword: z.string().min(1, 'Please confirm your password'),

    token: z.string().min(1, 'Reset token is required'),

    tenant: z.string().min(1, 'Username is required').trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
