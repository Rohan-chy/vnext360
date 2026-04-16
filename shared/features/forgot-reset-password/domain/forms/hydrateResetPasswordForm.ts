'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { UseFormReturn } from 'react-hook-form';
import { ResetPasswordFormValues } from '../schemas/resetPassword.schema';

export const useHydrateResetPasswordForm = (
  form: UseFormReturn<ResetPasswordFormValues>
) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const email = searchParams.get('email') || '';
    const tenant = searchParams.get('tenantId') || '';
    const token = searchParams.get('token') || '';

    form.reset({
      email,
      tenant,
      token,
      password: '',
      confirmPassword: '',
    });
  }, [searchParams, form]);
};
