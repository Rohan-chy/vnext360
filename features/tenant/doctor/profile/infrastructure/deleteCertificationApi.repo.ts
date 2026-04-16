import client from '@/core/network/httpClient';
import { deleteData } from '@/types/delete';
import { DeleteResponse } from '../domain/deleteResponse';

export const deleteCertification = async (
  data: deleteData
): Promise<DeleteResponse> => {
  return await client({
    url: `v1/patient/doctorVerification/doctorCertificationId/${data?.id}`,
    method: 'DELETE',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
