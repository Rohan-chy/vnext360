import client from '@/core/network/httpClient';
import { ProductResponse } from '../domain/getProduct.schema';

export const getOwnProduct = async (): Promise<ProductResponse> => {
  return await client({
    url: 'v1/patient/product/own',
    method: 'GET',
    isProtected: true,
  });
};
