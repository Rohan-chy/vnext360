'use client';
import { useQuery } from '@tanstack/react-query';
import { getMyHospitalSchedules } from '../infrastructure/getMyHospitalSchedulesApi.repo';
import { HospitalScheduleResponse } from '../domain/HospitalScheduleResponse.schema';

export const useGetMyHospitalSchedules = (id?: string) => {
  return useQuery<HospitalScheduleResponse>({
    queryKey: ['get-myHospital-schedules', id],
    queryFn: () => getMyHospitalSchedules(id!),
    enabled: !!id,
  });
};
