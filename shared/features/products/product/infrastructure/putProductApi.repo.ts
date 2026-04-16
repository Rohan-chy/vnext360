import client from '@/core/network/httpClient';
import { CreateProductFormValues } from '../domain/createProduct.schema';

export const putProduct = async (data: CreateProductFormValues) => {
  return await client({
    url: `v1/patient/product/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
