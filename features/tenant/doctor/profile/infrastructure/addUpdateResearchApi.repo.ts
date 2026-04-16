import client from '@/core/network/httpClient';
import { SaveResearchPayload } from '../domain/schema/doctorResearch.schema';

export const addUpdateResearch = async (data: SaveResearchPayload) => {
  return await client({
    url: `v1/patient/doctorVerification/research`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
