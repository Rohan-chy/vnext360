'use client';

import { useQuery } from '@tanstack/react-query';
import { getDoctorCategory } from '../infrastructure/getDoctorCategoryApi.repo';
import { CategoryResponse } from '../domain/doctorCategoryResponse';

export const useGetDoctorCategory = () => {
  return useQuery<CategoryResponse>({
    queryKey: ['get-doctor-category'],
    queryFn: getDoctorCategory,
  });
};
