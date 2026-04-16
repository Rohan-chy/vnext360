import client from '@/core/network/httpClient';
import { deleteData } from '@/types/delete';
import { DeleteResponse } from '../domain/deleteResponse';

export const deleteTraining = async (
  data: deleteData
): Promise<DeleteResponse> => {
  return await client({
    url: `v1/patient/doctorVerification/doctorTrainingId/${data?.id}`,
    method: 'DELETE',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
