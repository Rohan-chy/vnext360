'use client';
import { useQuery } from '@tanstack/react-query';
import { AppointmentResponse } from '../domain/appointmentBookResponse';
import { getAppointmentBook } from '../infrastructure/getAppointmentBook';

export const useGetAppointmentBook = (id: string) => {
  return useQuery<AppointmentResponse>({
    queryKey: ['clinic-appointmentBook'],
    queryFn: () => getAppointmentBook(id),
    enabled: !!id,
  });
};
