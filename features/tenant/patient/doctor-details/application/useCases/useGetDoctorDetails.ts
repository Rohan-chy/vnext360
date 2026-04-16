'use client';
import { useQuery } from '@tanstack/react-query';
import { doctorQueryKeys } from '../queryKeys/doctor.queryKeys';
import { getDoctorDetails } from '../../infrastructure/api/doctorDetails.api';
import { DoctorDetailResponse } from '../../infrastructure/dto/doctorDetails.dto';

export const useGetDoctorDetails = (id: string) => {
  return useQuery<DoctorDetailResponse>({
    queryKey: doctorQueryKeys.profile,
    queryFn: () => getDoctorDetails(id),
  });
};
