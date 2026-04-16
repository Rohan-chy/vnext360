'use client';
import { useQuery } from '@tanstack/react-query';
import { getDoctors } from '../../infrastructure/getDoctorApi.repository';

export const useGetDoctors = () => {
  return useQuery({
    queryKey: ['get-doctors'],
    queryFn: () => getDoctors(),
  });
};
