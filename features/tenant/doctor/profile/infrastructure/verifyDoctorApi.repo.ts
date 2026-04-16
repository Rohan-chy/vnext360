import client from '@/core/network/httpClient';
import { DoctorVerificationFormValues } from '../domain/schema/doctorVerification.schema';

export const verifyDoctor = async (data: DoctorVerificationFormValues) => {
  return await client({
    url: 'v1/patient/doctorVerification',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
