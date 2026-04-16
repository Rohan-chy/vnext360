import client from '@/core/network/httpClient';
import { SalutationFormValues } from '../domain/createSalutation.schema';

export const createSalutation = async (data: SalutationFormValues) => {
  return await client({
    url: 'v1/patient/salutation',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
