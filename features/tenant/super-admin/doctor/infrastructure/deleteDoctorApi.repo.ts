import client from '@/core/network/httpClient';
import { DeleteDoctor } from '../domain/deleteDoctor.schema';

export const deleteDoctor = async (data: DeleteDoctor) => {
  return await client({
    url: `v1/patient/doctor/${data?.id}`,
    method: 'DELETE',
    payload: data?.id,
    isProtected: true,
    tokenSource: 'session',
  });
};
