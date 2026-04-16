import client from '@/core/network/httpClient';
import { GetAppointmentResponse } from '../domain/appointmentResponse.schema';

export const getDoctorAppointment = async (
  dateEnum: number
): Promise<GetAppointmentResponse> => {
  return await client({
    url: `v1/patient/appointmentbooks/doctor?dateEnum=${dateEnum}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
