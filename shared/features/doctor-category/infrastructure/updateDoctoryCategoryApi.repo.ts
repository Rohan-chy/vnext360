import client from '@/core/network/httpClient';
import { updateCategorySchemaFormValues } from '../domain/doctorCategory.schema';

export const updateDoctorCategory = async (
  data: updateCategorySchemaFormValues
) => {
  return await client({
    url: `v1/patient/doctorCategory/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
