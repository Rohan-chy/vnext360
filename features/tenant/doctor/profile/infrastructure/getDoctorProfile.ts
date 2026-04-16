import client from '@/core/network/httpClient';
import { UpdateDoctorPayload } from '../domain/schema/updateDoctor.schema';

export const getDoctorProfile = async () => {
  const response = await client({
    url: 'v1/patient/doctor/doctorInfo',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
  return response as UpdateDoctorPayload;
};
