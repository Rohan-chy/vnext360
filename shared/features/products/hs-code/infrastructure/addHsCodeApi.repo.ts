import client from '@/core/network/httpClient';
import { hsCodeFormValues } from '../domain/forms/useCreateHsCodeForm';

export const addHsCode = async (data: hsCodeFormValues) => {
  return await client({
    url: 'v1/patient/hscode',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
