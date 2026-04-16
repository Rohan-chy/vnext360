import client from '@/core/network/httpClient';
import { subcategorySchemaFormValues } from '../domain/doctorSubcategory.schema';

export const addDoctorSubCategory = async (
  data: subcategorySchemaFormValues
) => {
  return await client({
    url: `v1/patient/doctorSubCategory`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
