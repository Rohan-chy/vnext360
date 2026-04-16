import client from '@/core/network/httpClient';
import { deleteData } from '@/types/delete';
import { DeleteResponse } from '../domain/deleteResponse';

export const deleteExperience = async (
  data: deleteData
): Promise<DeleteResponse> => {
  return await client({
    url: `v1/patient/doctorVerification/doctorExperienceId/${data?.id}`,
    method: 'DELETE',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
