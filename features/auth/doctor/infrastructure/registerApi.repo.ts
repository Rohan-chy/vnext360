import client from '@/core/network/httpClient';
import { DoctorRegistrationFormValues } from '../domain/registerDoctor.schema';

export const registerDoctor = async (data: DoctorRegistrationFormValues) => {
  return await client({
    url: 'v1/Doctor/member',
    method: 'POST',
    payload: data,
    isProtected: false,
  });
};
