import client from '@/core/network/httpClient';
import { SaveExperiencesPayload } from '../domain/schema/DoctorExperience.schema';

export const addUpdateExperience = async (data: SaveExperiencesPayload) => {
  return await client({
    url: `v1/patient/doctorVerification/experience`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
