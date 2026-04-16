import client from '@/core/network/httpClient';
import { ProductCategoryResponse } from '../domain/getProductCategory.schema';

export const getProductCategory =
  async (): Promise<ProductCategoryResponse> => {
    return await client({
      url: 'v1/patient/ProductCategory',
      method: 'GET',
      isProtected: true,
    });
  };
