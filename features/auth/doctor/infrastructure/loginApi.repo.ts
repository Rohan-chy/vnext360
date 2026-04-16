import client from '@/core/network/httpClient';
import { LoginFormValues } from '../domain/login.schema';

export const loginDoctor = async (data: LoginFormValues, tenant: string) => {
  return await client({
    url: 'token',
    method: 'POST',
    payload: data,
    isProtected: false,
    tenant,
  });
};
