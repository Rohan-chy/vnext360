import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

// 1️ Base password schema
export const passwordSchema = z.object({
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(32, 'Password must be at most 32 characters'),
});

// 2️ Email + Password schema (extend base)
export const emailLoginSchema = passwordSchema.extend({
  email: z.string().email('Invalid email address'),
});

// 3️ Phone + Password schema (extend base)
export const phoneLoginSchema = passwordSchema.extend({
  phone: z
    .string()
    .min(10, 'Mobile Number must be at least 10 digits')
    .max(15, 'Mobile Number must be at most 15 digits')
    .regex(/^\d+$/, 'Mobile Number must contain only digits'),
});

// Types
export type EmailLoginFormValues = z.infer<typeof emailLoginSchema>;
export type PhoneLoginFormValues = z.infer<typeof phoneLoginSchema>;

// Example hook for phone login
export const usePhoneLoginForm = () => {
  const form = useForm<PhoneLoginFormValues>({
    resolver: zodResolver(phoneLoginSchema),
    defaultValues: {
      phone: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  return form;
};

// Example hook for email login
export const useEmailLoginForm = () => {
  const form = useForm<EmailLoginFormValues>({
    resolver: zodResolver(emailLoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  return form;
};

// Props
export interface LoginFormProps<T extends FieldValues> {
  form: UseFormReturn<T>;
}

export type LoginErrorResponse = {
  detail: string;
  instance: string;
};
