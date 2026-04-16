'use client';

import { useQuery } from '@tanstack/react-query';
import { DoctorCategoryRepositoryImpl } from '../../infrastructure/repositories/doctorCategoryRepositoryImpl';
import { getDoctorsByCategoryId } from '../../application';

export const useGetDoctorsByCategoryId = (categoryId: string) => {
  return useQuery({
    queryKey: ['doctors', categoryId],
    queryFn: () =>
      getDoctorsByCategoryId(DoctorCategoryRepositoryImpl, categoryId),
    enabled: !!categoryId,
  });
};
