import client from '@/core/network/httpClient';
import { CreateProductAttributeValueFormValues } from '../domain/createProductAttributeValue.schema';

export const putProductAttributeValue = async (
  data: CreateProductAttributeValueFormValues
) => {
  return await client({
    url: `v1/patient/productAttributeValue/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
