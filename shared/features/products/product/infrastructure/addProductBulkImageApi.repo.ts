import client from '@/core/network/httpClient';
import { addProductBulkImageFormValues } from '../domain/addProductBulkImage.schema';

export const addProductBulkImage = async (
  data: addProductBulkImageFormValues
) => {
  const formData = new FormData();

  formData.append('productId', data.productId);

  if (data.image && data.image.length > 0) {
    data.image.forEach((file: any) => {
      formData.append('images', file); // append each file under the same "image" key
    });
  }

  return await client({
    url: 'v1/patient/product/productalternateimage',
    method: 'PUT',
    payload: formData,
    multipartFormdata: true,
    isProtected: true,
    tokenSource: 'session',
  });
};
