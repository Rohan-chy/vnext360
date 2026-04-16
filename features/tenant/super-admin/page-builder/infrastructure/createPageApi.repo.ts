import client from '@/core/network/httpClient';
import { CreatePageFormValues } from '../domain/creatPage.schema';

export const createPage = async (data: CreatePageFormValues) => {
  return await client({
    url: 'v1/patient/page',
    method: 'POST',
    payload: data,
    isProtected: false,
  });
};
