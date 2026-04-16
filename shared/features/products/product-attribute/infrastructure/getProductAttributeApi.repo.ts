import client from '@/core/network/httpClient';
import { productAttributeData } from '../domain/getProductAttribute.schema';

export const getProductAttribute = async (): Promise<productAttributeData> => {
  return await client({
    url: 'v1/patient/productAttribute',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
