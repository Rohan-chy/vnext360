import client from '@/core/network/httpClient';
import { CreateProductAttributeValueFormValues } from '../domain/createProductAttributeValue.schema';

export const createProductAttributeValue = async (
  data: CreateProductAttributeValueFormValues
) => {
  return await client({
    url: 'v1/patient/productAttributeValue',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
