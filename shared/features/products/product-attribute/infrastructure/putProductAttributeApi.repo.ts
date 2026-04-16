import client from '@/core/network/httpClient';
import { CreateProductAttributeFormValues } from '../domain/createProductAttribute.schema';

export const putProductAttribute = async (
  data: CreateProductAttributeFormValues
) => {
  return await client({
    url: `v1/patient/productAttribute/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
