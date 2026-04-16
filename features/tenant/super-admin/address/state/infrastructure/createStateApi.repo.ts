import client from '@/core/network/httpClient';
import { stateFormData } from '../domain/state.schema';

export const createState = async (data: stateFormData) => {
  return await client({
    url: 'v1/patient/state',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
