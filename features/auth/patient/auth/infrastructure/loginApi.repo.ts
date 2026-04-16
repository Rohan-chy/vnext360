import client from '@/core/network/httpClient';
import { EmailLoginFormValues } from '../domain/login.schema';

export const loginPatient = async (
  data: EmailLoginFormValues,
  tenant: string
) => {
  return await client({
    url: 'token',
    method: 'POST',
    payload: data,
    isProtected: false,
    tenant,
  });
};
