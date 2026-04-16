import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),

  tenant: z.string().min(1, 'Username is required').trim(),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
