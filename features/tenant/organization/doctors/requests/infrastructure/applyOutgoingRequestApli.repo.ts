import client from '@/core/network/httpClient';

export const applyOutgoingRequest = async (id: string) => {
  return await client({
    url: `v1/patient/doctorClinicRequest/apply/${id}`,
    method: 'PUT',
    payload: id,
    isProtected: true,
    tokenSource: 'session',
  });
};
