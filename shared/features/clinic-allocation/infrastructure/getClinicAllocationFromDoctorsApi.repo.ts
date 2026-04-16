import client from '@/core/network/httpClient';
import { DoctorScheduleResponse } from '../domain/doctorScheduleResponse';

export const getClinicAllocationFromDoctors =
  async (): Promise<DoctorScheduleResponse> => {
    return await client({
      url: 'v1/patient/doctorClinicAllocation/received',
      method: 'GET',
      isProtected: true,
      tokenSource: 'session',
    });
  };
