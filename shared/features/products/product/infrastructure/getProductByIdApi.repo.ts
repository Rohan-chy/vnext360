import client from '@/core/network/httpClient';
import { ProductDetailsResponse } from '../domain/getProductById.schema';

export const getProductById = async (
  id: string
): Promise<ProductDetailsResponse> => {
  return await client({
    url: `v1/patient/product/${id}`,
    method: 'GET',
    isProtected: true,
  });
};
