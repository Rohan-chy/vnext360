import client from '@/core/network/httpClient';
import { CreateClinicFormValues } from '../domain/forms/createClinicForm';

export const createClinic = async (data: CreateClinicFormValues) => {
  return await client({
    url: 'v1/patient/clinic',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
