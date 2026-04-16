import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

// Define the Zod schema
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'), // email validation
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters') // min length
    .max(32, 'Password must be at most 32 characters'), // optional max length
});

// TypeScript type inferred from Zod schema
export type LoginFormValues = z.infer<typeof loginSchema>;

// Props for form component
export interface LoginFormProps {
  form: UseFormReturn<LoginFormValues>;
}

export type LoginErrorResponse = {
  detail: string;
  instance: string;
};
