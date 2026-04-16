import client from '@/core/network/httpClient';
import { CreateProductCategoryFormValues } from '../domain/createProductCategory.schema';

export const createProductCategory = async (
  data: CreateProductCategoryFormValues
) => {
  return await client({
    url: 'v1/patient/ProductCategory',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
