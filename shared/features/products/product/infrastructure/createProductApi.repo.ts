import client from '@/core/network/httpClient';
import { CreateProductFormValues } from '../domain/createProduct.schema';

export const createProduct = async (data: CreateProductFormValues) => {
  return await client({
    url: 'v1/patient/product',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
