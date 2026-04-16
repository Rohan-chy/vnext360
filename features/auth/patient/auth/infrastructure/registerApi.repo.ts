import client from '@/core/network/httpClient';
import { PatientRegistrationFormValues } from '../domain/registerPatient.schema';

export const registerPatient = async (data: PatientRegistrationFormValues) => {
  return await client({
    url: 'users/patientregister',
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'local',
  });
};
