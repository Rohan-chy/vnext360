import client from '@/core/network/httpClient';
import { CreatePageFormValues } from '../domain/creatPage.schema';

export const putPage = async (data: CreatePageFormValues) => {
  return await client({
    url: `v1/patient/page/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: false,
  });
};
