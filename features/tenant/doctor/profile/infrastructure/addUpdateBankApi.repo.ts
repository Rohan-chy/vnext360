import client from '@/core/network/httpClient';
import { SaveBankDetailsPayload } from '../domain/schema/doctorBankDetails.schema';

export const addUpdateBank = async (data: SaveBankDetailsPayload) => {
  return await client({
    url: `v1/patient/doctorVerification/bankDetail`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
