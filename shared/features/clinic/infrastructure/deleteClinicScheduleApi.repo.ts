import client from '@/core/network/httpClient';
import { deleteData } from '@/types/delete';

export const deleteClinicSchedule = async (data: deleteData) => {
  return await client({
    url: `v1/patient/clinicTiming/${data?.id}`,
    method: 'DELETE',
    payload: data?.id,
    isProtected: true,
    tokenSource: 'session',
  });
};
