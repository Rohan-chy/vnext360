import client from '@/core/network/httpClient';
import { DoctorScheduleFormData } from '../domain/schedules.schema';

export const updateDoctorSchedule = async (data: DoctorScheduleFormData) => {
  return await client({
    url: `v1/patient/doctorClinicAllocation/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
