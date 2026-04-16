import client from '@/core/network/httpClient';
import { RegisterAdditionalInfoPayload } from '../domain/registerDoctorAdditionalInfo.schema';

export const registerAdditionalInfoDoctor = async (
  data: RegisterAdditionalInfoPayload
) => {
  return await client({
    url: 'v1/patient/doctor',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'local',
  });
};
