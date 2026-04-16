import client from '@/core/network/httpClient';
import { AddScheduleFormValues } from '../domain/addSchedules.schema';

export const addSchedules = async (data: AddScheduleFormValues) => {
  return await client({
    url: 'v1/patient/doctorClinicAllocation',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
