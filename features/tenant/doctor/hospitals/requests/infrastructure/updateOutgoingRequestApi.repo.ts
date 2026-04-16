import client from '@/core/network/httpClient';
import { updateOutgoingRequestSchemaFormValues } from '../domain/outgoingRequest.schema';

export const updateOutgoingRequest = async (
  data: updateOutgoingRequestSchemaFormValues
) => {
  return await client({
    url: `v1/patient/doctorClinicRequest/forDoctor/${data?.id}`,
    method: 'PUT',
    payload: data,
    isProtected: true,
    tokenSource: 'session',
  });
};
