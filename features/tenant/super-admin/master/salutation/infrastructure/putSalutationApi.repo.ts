import client from '@/core/network/httpClient';
import { SalutationFormValues } from '../domain/createSalutation.schema';

export const putSalutation = async (data: SalutationFormValues) => {
  return await client({
    url: `v1/patient/salutation/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
