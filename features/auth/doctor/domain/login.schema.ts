import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

// Define the Zod schema
export const loginSchema = z.object({
  phone: z
    .string()
    .min(10, 'Mobile Number must be at least 10 digits')
    .max(15, 'Mobile Number must be at most 15 digits')
    .regex(/^\d+$/, 'Mobile Number must contain only digits'),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters') // min length
    .max(32, 'Password must be at most 32 characters'), // optional max length
});

// TypeScript type inferred from Zod schema
export type LoginFormValues = z.infer<typeof loginSchema>;

export const useDoctorLoginForm = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: '',
      password: '',
    },
    mode: 'onSubmit', // or 'onChange'
  });
  return form;
};

// Props for form component
export interface LoginFormProps {
  form: UseFormReturn<LoginFormValues>;
}

export type LoginErrorResponse = {
  detail: string;
  instance: string;
};
