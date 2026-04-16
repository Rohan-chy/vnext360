import client from '@/core/network/httpClient';
import { deleteData } from '@/types/delete';
import { DeleteResponse } from '../domain/deleteResponse';

export const deleteNominee = async (
  data: deleteData
): Promise<DeleteResponse> => {
  return await client({
    url: `v1/patient/doctorVerification/doctorNomineeId/${data?.id}`,
    method: 'DELETE',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
