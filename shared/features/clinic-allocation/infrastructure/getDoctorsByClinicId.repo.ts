import client from '@/core/network/httpClient';
import { GetDoctorsOfClincResponse } from '../domain/doctorsOfClinicReponse';

export const getDoctorsOfClinicByClinicId = async (
  id: string
): Promise<GetDoctorsOfClincResponse> => {
  return await client({
    url: `v1/patient/doctorClinicAllocation/clinicId/${id}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
