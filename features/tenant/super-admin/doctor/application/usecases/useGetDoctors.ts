'use client';
import { useQuery } from '@tanstack/react-query';
import { getDoctors } from '../../infrastructure/getDoctorApi.repository';
import { DoctorResponse } from '../../domain/getDoctors.schema';

export const useGetDoctors = () => {
  return useQuery<DoctorResponse>({
    queryKey: ['get-doctors'],
    queryFn: () => getDoctors(),
  });
};
