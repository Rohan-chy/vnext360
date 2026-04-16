import client from '@/core/network/httpClient';

export const canceleAppointment = async (id: string) => {
  return await client({
    url: `v1/patient/appointmentbooks/cancel/${id}`,
    method: 'PUT',
    payload: id,
    isProtected: true,
    tokenSource: 'session',
  });
};
