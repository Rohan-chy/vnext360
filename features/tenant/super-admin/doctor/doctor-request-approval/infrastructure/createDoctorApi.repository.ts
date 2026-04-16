import client from '@/core/network/httpClient';
import { CreateDoctorPayload } from '../domain/createDoctor.schema';

export const createDoctor = async (data: CreateDoctorPayload) => {
  return await client({
    url: 'v1/patient/doctor',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
