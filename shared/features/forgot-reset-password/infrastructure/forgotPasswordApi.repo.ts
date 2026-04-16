import client from '@/core/network/httpClient';
import { ForgotPasswordFormValues } from '../domain/schemas/forgotPassword.schema';

export const forgotPassword = async (data: ForgotPasswordFormValues) => {
  return await client({
    url: 'users/forgot-password',
    method: 'POST',
    payload: data,
    isProtected: false,
    tenant: data?.tenant,
  });
};
