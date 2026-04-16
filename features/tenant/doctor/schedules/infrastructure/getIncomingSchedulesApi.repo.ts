import client from '@/core/network/httpClient';
import { GetDoctorScheduleResponse } from '../domain/response.schema';

export const getDoctorIncomingSchedule =
  async (): Promise<GetDoctorScheduleResponse> => {
    return await client({
      url: `v1/patient/doctorClinicAllocation/received`,
      method: 'GET',
      isProtected: true,
      tokenSource: 'session',
    });
  };
