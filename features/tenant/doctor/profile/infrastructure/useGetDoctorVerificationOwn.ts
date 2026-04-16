import client from '@/core/network/httpClient';
import { DoctorVerificationData } from '../domain/schema/doctorVerification.schema';

export const getDoctorVerificationOwn = async () => {
  const response = await client({
    url: `v1/patient/doctorVerification/own`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
  return response as DoctorVerificationData;
};
