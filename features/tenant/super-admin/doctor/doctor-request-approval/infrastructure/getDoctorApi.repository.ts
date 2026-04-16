import client from '@/core/network/httpClient';

export const getDoctors = async () => {
  return await client({
    url: 'v1/patient/doctor',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
