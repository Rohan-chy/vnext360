import client from '@/core/network/httpClient';
import { DoctorProfileVerificationFormValues } from '../domain/requestVerification.schema';

export const doctorProfileVerification = async (
  data: DoctorProfileVerificationFormValues
) => {
  return await client({
    url: 'v1/patient/doctorVerification/doctorVerificationByAdmin',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
