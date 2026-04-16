import client from '@/core/network/httpClient';
import { deleteData } from '@/types/delete';

export const deletePage = async (data: deleteData) => {
  console.log(data);
  return await client({
    url: `v1/patient/page/${data?.id}`,
    method: 'DELETE',
    payload: data?.id,
    isProtected: false,
  });
};
