'use client';
import { useQuery } from '@tanstack/react-query';
import { getDoctorById } from '../../infrastructure/getDoctorByIdApi.repo';

export const useGetDoctorById = (id: string) => {
  return useQuery({
    queryKey: ['get-doctorById', id],
    queryFn: () => getDoctorById(id),
    enabled: !!id,
  });
};
