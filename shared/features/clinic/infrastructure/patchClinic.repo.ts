import client from '@/core/network/httpClient';
import { CreateClinicFormValues } from '../domain/forms/createClinicForm';

export const patchClinic = async (data: CreateClinicFormValues) => {
  return await client({
    url: `v1/patient/clinic/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
