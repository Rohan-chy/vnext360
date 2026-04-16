import client from '@/core/network/httpClient';
import { DoctorProfessionalFormValues } from '../domain/schema/doctorProfession.schema';

export const addUpdateDoctorProfession = async (
  data: DoctorProfessionalFormValues
) => {
  return await client({
    url: `v1/patient/doctorVerification/separate`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
