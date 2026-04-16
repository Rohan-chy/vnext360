import client from '@/core/network/httpClient';
import { CreateProductCategoryFormValues } from '../domain/createProductCategory.schema';

export const putProductCategory = async (
  data: CreateProductCategoryFormValues
) => {
  return await client({
    url: `v1/patient/ProductCategory/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
