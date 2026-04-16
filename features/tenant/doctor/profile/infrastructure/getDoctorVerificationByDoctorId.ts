import client from '@/core/network/httpClient';
import { DoctorVerificationData } from '../domain/schema/doctorVerification.schema';

export const getDoctorVerificationByDoctorId = async (id: string) => {
  const response = await client({
    url: `v1/patient/doctorVerification/doctorId/${id}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });

  return response as DoctorVerificationData;
};
