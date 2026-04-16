import client from '@/core/network/httpClient';
import { SaveTrainingsPayload } from '../domain/schema/doctorTraining.schema';

export const addUpdateTraining = async (data: SaveTrainingsPayload) => {
  return await client({
    url: `v1/patient/doctorVerification/training`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
