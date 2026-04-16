import client from '@/core/network/httpClient';
import { deleteData } from '@/types/delete';

export const deleteSalutation = async (data: deleteData) => {
  return await client({
    url: `v1/patient/salutation/${data?.id}`,
    method: 'DELETE',
    payload: data?.id,
    isProtected: false,
  });
};
