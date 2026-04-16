import client from '@/core/network/httpClient';
import { outgoingRequestSchemaFormValues } from '../domain/outgoingRequest.schema';

export const addOutgoingRequest = async (
  data: outgoingRequestSchemaFormValues
) => {
  return await client({
    url: `v1/patient/doctorClinicRequest/forHospital`,
    method: 'POST',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
