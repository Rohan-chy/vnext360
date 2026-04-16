'use client';
import { useQuery } from '@tanstack/react-query';
import { getDoctorSubcategory } from '../infrastructure/getDoctorSubcategoryApi.repo';
import { DoctorSubCategoryResponse } from '../domain/doctorSubCategoryResponse';

export const useGetDoctorSubcategory = () => {
  return useQuery<DoctorSubCategoryResponse>({
    queryKey: ['get-doctor-subcategory'],
    queryFn: () => getDoctorSubcategory(),
  });
};
