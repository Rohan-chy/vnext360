import client from '@/core/network/httpClient';
import { DoctorResponse } from '../domain/getDoctors.schema';

export const getDoctors = async (): Promise<DoctorResponse> => {
  return await client({
    url: 'v1/patient/doctor',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
