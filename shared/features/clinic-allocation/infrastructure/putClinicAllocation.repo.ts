import client from '@/core/network/httpClient';
import { CreateClinicAllocationFormValues } from '../domain/createClinicAllocation.schema';

export const putClinicAllocation = async (
  data: CreateClinicAllocationFormValues
) => {
  return await client({
    url: `v1/patient/doctorClinicAllocation/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
