import client from '@/core/network/httpClient';

export const getClinicAllocation = async () => {
  return await client({
    url: 'v1/patient/doctorClinicAllocation',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
