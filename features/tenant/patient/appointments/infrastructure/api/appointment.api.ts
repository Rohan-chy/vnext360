import client from '@/core/network/httpClient';
import { PatientAppointmentApiResponse } from '../dto/appointment.dto';
import { Appointment } from '../../domain/appointment.schema';

export const getPatientApointments = async (type: 0 | 1 | 2) => {
  return await client<PatientAppointmentApiResponse>({
    url: `v1.0/patient/appointmentbooks/own?dateEnum=${type}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};

export const bookAppointment = async (data: Appointment) => {
  return await client({
    url: `v1.0/patient/appointmentBooks`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
