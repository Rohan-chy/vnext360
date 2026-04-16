import client from '@/core/network/httpClient';
import { deleteData } from '@/types/delete';

export const deleteHsCode = async (data: deleteData) => {
  return await client({
    url: `v1/patient/hscode/${data?.id}`,
    method: 'DELETE',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
