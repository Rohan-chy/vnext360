import client from '@/core/network/httpClient';
import { addProductImageFormValues } from '../domain/addProductImage.schema';

export const addProductImage = async (data: addProductImageFormValues) => {
  const formData = new FormData();

  formData.append('productId', data.productId);

  // Append file properly
  if (data.image) {
    formData.append('image', data.image);
  }

  return await client({
    url: 'v1/patient/product/product',
    method: 'PUT',
    payload: formData,
    multipartFormdata: true,
    isProtected: true,
    tokenSource: 'session',
  });
};
