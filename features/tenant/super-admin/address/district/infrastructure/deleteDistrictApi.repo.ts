import client from '@/core/network/httpClient';
import { deleteData } from '@/types/delete';

export const deleteDistrict = async (data: deleteData) => {
  return await client({
    url: `v1/patient/district/${data?.id}`,
    method: 'DELETE',
    payload: data?.id,
    isProtected: true,
    tokenSource: 'session',
  });
};
