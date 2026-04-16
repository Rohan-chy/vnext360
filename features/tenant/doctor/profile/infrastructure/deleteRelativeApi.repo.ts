import client from '@/core/network/httpClient';
import { deleteData } from '@/types/delete';
import { DeleteResponse } from '../domain/deleteResponse';

export const deleteRelative = async (
  data: deleteData
): Promise<DeleteResponse> => {
  return await client({
    url: `v1/patient/doctorVerification/doctorRelativeId/${data?.id}`,
    method: 'DELETE',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
