import client from '@/core/network/httpClient';
import { DoctorScheduleFormData } from '../domain/schedules.schema';

export const createDoctorSchedule = async (data: DoctorScheduleFormData) => {
  return await client({
    url: 'v1/patient/doctorClinicAllocation/own',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
