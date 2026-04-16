import client from '@/core/network/httpClient';
import { stateFormData } from '../domain/state.schema';

export const updateState = async (data: stateFormData) => {
  return await client({
    url: `v1/patient/state/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
