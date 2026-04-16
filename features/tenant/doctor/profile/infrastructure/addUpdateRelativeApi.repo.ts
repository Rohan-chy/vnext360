import client from '@/core/network/httpClient';
import { SaveRelativesPayload } from '../domain/schema/doctorRelative.schema';

export const addUpdateRelative = async (data: SaveRelativesPayload) => {
  return await client({
    url: `v1/patient/doctorVerification/relative`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
