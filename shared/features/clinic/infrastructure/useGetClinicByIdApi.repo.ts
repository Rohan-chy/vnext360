import client from '@/core/network/httpClient';
import { ClinicResponseById } from '../domain/schemas/getClinicById.schema';

export const getClinicById = async (id: string) => {
  const response = await client({
    url: `v1/patient/clinic/${id}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
  return response as ClinicResponseById;
};
