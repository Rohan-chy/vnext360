import client from '@/core/network/httpClient';
import { updatesubCategorySchemaFormValues } from '../domain/doctorSubcategory.schema';

export const updateDoctorSubCategory = async (
  data: updatesubCategorySchemaFormValues
) => {
  return await client({
    url: `v1/patient/doctorSubCategory/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
