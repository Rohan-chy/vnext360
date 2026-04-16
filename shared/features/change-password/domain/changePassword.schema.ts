import { z } from 'zod';

export const changePasswordSchema = z
  .object({
    password: z.string().min(1, 'Current password is required'),

    newPassword: z.string().min(6, 'Password must be at least 6 characters'),

    confirmNewPassword: z.string().min(1, 'Confirm password is required'),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Passwords do not match',
    path: ['confirmNewPassword'],
  });

export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;
