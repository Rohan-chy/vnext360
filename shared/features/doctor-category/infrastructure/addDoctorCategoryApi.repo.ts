import client from '@/core/network/httpClient';
import { categorySchemaFormValues } from '../domain/doctorCategory.schema';

export const addDoctorCategory = async (data: categorySchemaFormValues) => {
  return await client({
    url: `v1/patient/doctorCategory`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
