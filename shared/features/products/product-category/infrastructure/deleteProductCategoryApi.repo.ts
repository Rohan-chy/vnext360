import client from '@/core/network/httpClient';
import { deleteData } from '@/types/delete';

export const deleteProductCategory = async (data: deleteData) => {
  return await client({
    url: `v1/patient/ProductCategory/${data?.id}`,
    method: 'DELETE',
    payload: data?.id,
    isProtected: true,
    tokenSource: 'session',
  });
};
