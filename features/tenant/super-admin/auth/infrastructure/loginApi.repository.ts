import client from '@/core/network/httpClient';
import { LoginFormValues } from '../domain/login.schema';

export const login = async (data: LoginFormValues) => {
  return await client({
    url: 'token',
    method: 'POST',
    payload: data,
    isProtected: false,
    tenant: 'root',
  });
};
