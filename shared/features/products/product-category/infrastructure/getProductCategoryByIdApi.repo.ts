import client from '@/core/network/httpClient';

export const getProductCategoryById = async (id: string) => {
  return await client({
    url: `v1/patient/ProductCategory/${id}`,
    method: 'GET',
    isProtected: true,
  });
};
