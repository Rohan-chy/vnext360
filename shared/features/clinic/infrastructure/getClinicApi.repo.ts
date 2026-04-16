import client from '@/core/network/httpClient';
import { ClinicListResponse } from '../domain/schemas/getClinic.schema';

export const getClinics = async () => {
  const response = await client({
    url: 'v1/patient/clinic',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
  return response as ClinicListResponse;
};
