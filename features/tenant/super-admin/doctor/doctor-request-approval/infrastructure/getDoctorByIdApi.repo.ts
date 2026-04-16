import client from '@/core/network/httpClient';

export const getDoctorById = async (id: string) => {
  return await client({
    url: `v1/patient/doctor/detail/${id}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
