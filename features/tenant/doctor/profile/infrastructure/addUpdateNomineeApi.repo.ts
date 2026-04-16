import client from '@/core/network/httpClient';
import { SaveNomineesPayload } from '../domain/schema/doctorNominee.schema';

export const addUpdateNominee = async (data: SaveNomineesPayload) => {
  return await client({
    url: `v1/patient/doctorVerification/nominee`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
