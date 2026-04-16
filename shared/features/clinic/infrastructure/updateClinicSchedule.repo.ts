import client from '@/core/network/httpClient';
import { ClinicScheduleFormValues } from '../domain/forms/ClinicScheduleForm';

export const updateClinicSchedule = async (data: ClinicScheduleFormValues) => {
  return await client({
    url: `v1/patient/clinicTiming`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
