import client from '@/core/network/httpClient';
import { ChangePasswordFormValues } from '../domain/changePassword.schema';

export const changePassword = async (data: ChangePasswordFormValues) => {
  return await client({
    url: 'users/change-password',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
