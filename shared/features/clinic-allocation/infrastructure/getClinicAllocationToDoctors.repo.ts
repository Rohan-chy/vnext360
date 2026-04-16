import client from '@/core/network/httpClient';
import { DoctorScheduleResponse } from '../domain/doctorScheduleResponse';

export const getClinicAllocationToDoctors =
  async (): Promise<DoctorScheduleResponse> => {
    return await client({
      url: 'v1/patient/doctorClinicAllocation/sent',
      method: 'GET',
      isProtected: true,
      tokenSource: 'session',
    });
  };
