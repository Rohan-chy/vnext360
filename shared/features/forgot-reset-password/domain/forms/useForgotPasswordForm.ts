'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  ForgotPasswordFormValues,
  forgotPasswordSchema,
} from '../schemas/forgotPassword.schema';

export const useForgotPasswordForm = (source: string) => {
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
      tenant: source === 'organization' ? '' : source,
    },
    mode: 'onChange',
  });

  return form;
};
