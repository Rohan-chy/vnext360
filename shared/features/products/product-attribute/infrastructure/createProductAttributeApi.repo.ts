import client from '@/core/network/httpClient';
import { CreateProductAttributeFormValues } from '../domain/createProductAttribute.schema';

export const createProductAttribute = async (
  data: CreateProductAttributeFormValues
) => {
  return await client({
    url: 'v1/patient/productAttribute',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
