import client from '@/core/network/httpClient';
import { GetDoctorScheduleResponse } from '../domain/response.schema';

export const getDoctorSchedule = async (
  doctorId: string
): Promise<GetDoctorScheduleResponse> => {
  return await client({
    url: `v1/patient/doctorClinicAllocation/own?id=${doctorId}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
