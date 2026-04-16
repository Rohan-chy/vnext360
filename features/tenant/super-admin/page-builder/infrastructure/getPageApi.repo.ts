import client from '@/core/network/httpClient';

export const getPage = async () => {
  return await client({
    url: 'v1/patient/page',
    method: 'GET',
    isProtected: true,
  });
};
