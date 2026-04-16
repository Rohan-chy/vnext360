import client from '@/core/network/httpClient';
import { DoctorSubCategoryResponse } from '../domain/doctorSubCategoryResponse';

export const getDoctorSubcategory =
  async (): Promise<DoctorSubCategoryResponse> => {
    return await client({
      url: 'v1/patient/doctorSubCategory',
      method: 'GET',
      isProtected: false,
    });
  };
