import client from '@/core/network/httpClient';
import { hsCodeFormValues } from '../domain/forms/useCreateHsCodeForm';

export const updateHsCode = async (data: hsCodeFormValues) => {
  return await client({
    url: `v1/patient/hscode/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
