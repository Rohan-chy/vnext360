import client from '@/core/network/httpClient';
import { CategoryResponse } from '../domain/doctorCategoryResponse';

export const getDoctorCategory = async (): Promise<CategoryResponse> => {
  const response = await client({
    url: 'v1/patient/doctorCategory',
    method: 'GET',
    isProtected: true,
  });

  return response as CategoryResponse;
};
