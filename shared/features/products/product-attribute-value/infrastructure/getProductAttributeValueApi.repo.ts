import client from '@/core/network/httpClient';
import { ProductAttributeValueData } from '../domain/getProductAttributeValue.schema';

export const getProductAttributeValue =
  async (): Promise<ProductAttributeValueData> => {
    return await client({
      url: 'v1/patient/productAttributeValue',
      method: 'GET',
      isProtected: true,
      tokenSource: 'session',
    });
  };
