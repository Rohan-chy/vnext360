'use client';
import { useQuery } from '@tanstack/react-query';
import { GetAppointmentResponse } from '../../domain/appointmentResponse.schema';
import { getDoctorAppointment } from '../../infrastructure/getAppointmentsApi.repo';

export const useGetDoctorAppointment = (dateEnum: number) => {
  return useQuery<GetAppointmentResponse>({
    queryKey: ['get-DoctorAppointment', dateEnum],
    queryFn: () => getDoctorAppointment(dateEnum),
  });
};
