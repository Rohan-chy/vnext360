'use client';
import { useQuery } from '@tanstack/react-query';
import { getDoctorSchedule } from '../../infrastructure/getSchedulesApi.repo';
import { GetDoctorScheduleResponse } from '../../domain/response.schema';

export const useGetDoctorSchedule = (doctorId?: string) => {
  return useQuery<GetDoctorScheduleResponse>({
    queryKey: ['get-DoctorSchedule', doctorId],
    queryFn: () => getDoctorSchedule(doctorId as string),
    enabled: !!doctorId,
  });
};
