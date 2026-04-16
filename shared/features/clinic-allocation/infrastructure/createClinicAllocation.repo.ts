import client from '@/core/network/httpClient';
import { CreateClinicAllocationFormValues } from '../domain/createClinicAllocation.schema';

export const createClinicAllocation = async (
  data: CreateClinicAllocationFormValues
) => {
  return await client({
    url: 'v1/patient/doctorClinicAllocation',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
