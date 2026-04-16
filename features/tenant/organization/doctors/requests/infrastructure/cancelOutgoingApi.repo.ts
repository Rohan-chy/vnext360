import client from '@/core/network/httpClient';

export const canceleOutgoingRequest = async (id: string) => {
  return await client({
    url: `v1/patient/doctorClinicRequest/cancel/${id}`,
    method: 'PUT',
    payload: id,
    isProtected: true,
    tokenSource: 'session',
  });
};
