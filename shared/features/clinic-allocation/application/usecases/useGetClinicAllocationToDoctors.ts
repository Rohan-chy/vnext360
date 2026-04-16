'use client';
import { useQuery } from '@tanstack/react-query';
import { getClinicAllocationToDoctors } from '../../infrastructure/getClinicAllocationToDoctors.repo';
import { DoctorScheduleResponse } from '../../domain/doctorScheduleResponse';

export const useGetClinicAllocationToDoctors = () => {
  return useQuery<DoctorScheduleResponse>({
    queryKey: ['get-clinic-allocationToDoctors'],
    queryFn: () => getClinicAllocationToDoctors(),
  });
};
