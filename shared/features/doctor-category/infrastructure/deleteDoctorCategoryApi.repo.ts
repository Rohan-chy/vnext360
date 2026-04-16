import client from '@/core/network/httpClient';
export const deleteDoctorCategory = async (id: string) => {
  return await client({
    url: `v1/patient/doctorCategory/${id}`,
    method: 'DELETE',
    payload: id,
    isProtected: true,
    tokenSource: 'session',
  });
};
