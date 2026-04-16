import client from '@/core/network/httpClient';
import { ClinicScheduleFormValues } from '../domain/forms/ClinicScheduleForm';

export const createClinicSchedule = async (data: ClinicScheduleFormValues) => {
  return await client({
    url: 'v1/patient/clinicTiming/all',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
