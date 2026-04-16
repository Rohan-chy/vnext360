'use client';
import { useQuery } from '@tanstack/react-query';
import { patientAppointmentsQueryKeys } from '../queryKeys/patientAppointments.queryKeys';
import { getPatientApointments } from '../../infrastructure/api/appointment.api';
import { PatientAppointmentApiResponse } from '../../infrastructure/dto/appointment.dto';

export const useGetPatientAppointments = (type: 0 | 1 | 2) => {
  return useQuery<PatientAppointmentApiResponse>({
    queryKey: [...patientAppointmentsQueryKeys.patientAppointments, type],
    queryFn: () => getPatientApointments(type),
  });
};
