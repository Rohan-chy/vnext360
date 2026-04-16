'use client';
import { useQuery } from '@tanstack/react-query';
import { DoctorScheduleResponse } from '../../domain/doctorScheduleResponse';
import { getClinicAllocationFromDoctors } from '../../infrastructure/getClinicAllocationFromDoctorsApi.repo';

export const useGetClinicAllocationFromDoctors = () => {
  return useQuery<DoctorScheduleResponse>({
    queryKey: ['get-clinic-allocationFromDoctors'],
    queryFn: () => getClinicAllocationFromDoctors(),
  });
};
