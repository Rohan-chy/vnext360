import client from '@/core/network/httpClient';
import { PhoneLoginFormValues } from '../domain/login.schema';

export const loginWithPhonePatient = async (
  data: PhoneLoginFormValues,
  tenant: string
) => {
  return await client({
    url: 'token/phone',
    method: 'POST',
    payload: data,
    isProtected: false,
    tenant,
  });
};
