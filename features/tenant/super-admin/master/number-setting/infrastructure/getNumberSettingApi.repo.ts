import client from '@/core/network/httpClient';

export const getNumberSettings = async () => {
  return await client({
    url: 'v1/patient/appointmentNumberSetting',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
