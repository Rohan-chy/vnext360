import client from '@/core/network/httpClient';
import { ResetPasswordFormValues } from '../domain/schemas/resetPassword.schema';

export const resetPassword = async (data: ResetPasswordFormValues) => {
  return await client({
    url: 'users/reset-password',
    method: 'POST',
    payload: data,
    isProtected: false,
    tenant: data?.tenant,
  });
};
