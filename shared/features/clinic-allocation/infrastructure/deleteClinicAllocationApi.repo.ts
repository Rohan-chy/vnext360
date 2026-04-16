import client from '@/core/network/httpClient';
import { DeleteClinicAllocation } from '../domain/deleteClinicAllocation.schema';

export const deleteClinicAllocation = async (data: DeleteClinicAllocation) => {
  return await client({
    url: `v1/patient/doctorClinicAllocation/${data?.id}`,
    method: 'DELETE',
    payload: data?.id,
    isProtected: true,
    tokenSource: 'session',
  });
};
