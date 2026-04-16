import client from '@/core/network/httpClient';
import { AppointmentResponse } from '../domain/appointmentBookResponse';

export const getAppointmentBook = async (
  id: string
): Promise<AppointmentResponse> => {
  return await client({
    url: `v1/patient/appointmentbooks/clinicid/${id}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
