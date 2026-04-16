import client from '@/core/network/httpClient';
import { DoctorVerificationFormValues } from '../domain/schema/doctorVerification.schema';

export const updateDoctorVerification = async (
  data: DoctorVerificationFormValues
) => {
  return await client({
    url: `v1/patient/doctorVerification`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
