'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  ResetPasswordFormValues,
  resetPasswordSchema,
} from '../schemas/resetPassword.schema';

export const useResetPasswordForm = () => {
  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      tenant: '',
      token: '',
    },
    mode: 'onChange',
  });

  return form;
};
