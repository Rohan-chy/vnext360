import client from '@/core/network/httpClient';
import { deleteData } from '@/types/delete';

export const deleteProductAttributeValue = async (data: deleteData) => {
  return await client({
    url: `v1/patient/productAttributeValue/${data?.id}`,
    method: 'DELETE',
    payload: data?.id,
    isProtected: true,
    tokenSource: 'session',
  });
};
