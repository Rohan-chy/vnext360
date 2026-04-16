import client from '@/core/network/httpClient';
import { DoctorHospitalRequestListResponse } from '../domain/doctorHospitalResponse';

export const getMyHospitals = async () => {
  const response = await client({
    url: `v1/patient/doctor/clinicsofdoctor`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
  return response as DoctorHospitalRequestListResponse;
};
