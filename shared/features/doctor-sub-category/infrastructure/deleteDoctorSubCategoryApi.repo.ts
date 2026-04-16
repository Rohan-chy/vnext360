import client from '@/core/network/httpClient';
export const deleteDoctorSubCategory = async (id: string) => {
  return await client({
    url: `v1/patient/doctorSubCategory/${id}`,
    method: 'DELETE',
    payload: id,
    isProtected: true,
    tokenSource: 'session',
  });
};
