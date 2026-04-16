import client from '@/core/network/httpClient';
import { UpdateDoctorPayload } from '../domain/schema/updateDoctor.schema';

export const updateDoctor = async (data: UpdateDoctorPayload) => {
  return await client({
    url: `v1/patient/doctor/update`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
