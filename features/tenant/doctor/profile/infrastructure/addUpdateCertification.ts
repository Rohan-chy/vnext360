import client from '@/core/network/httpClient';
import { SaveCertificationsPayload } from '../domain/schema/doctorCertification.schema';

export const addUpdateCertification = async (
  data: SaveCertificationsPayload
) => {
  return await client({
    url: `v1/patient/doctorVerification/certification`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
