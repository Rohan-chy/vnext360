'use client';

import { useQuery } from '@tanstack/react-query';
import { DoctorCategoryRepositoryImpl } from '../../infrastructure/repositories/doctorCategoryRepositoryImpl';
import { DoctorCategory } from '../../domain';
import { getDoctorCategories } from '../../application';

export const useGetDoctorCategories = () => {
  return useQuery<DoctorCategory[], Error>({
    queryKey: ['doctorCategories'],
    queryFn: () => getDoctorCategories(DoctorCategoryRepositoryImpl),
  });
};
