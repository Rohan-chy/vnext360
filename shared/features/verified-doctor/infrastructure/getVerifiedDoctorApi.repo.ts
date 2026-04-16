import client from '@/core/network/httpClient';
import { VerifiedDoctorListResponse } from '../domain/verifiedDoctorResponse.schema';

export const getVerifiedDoctor =
  async (): Promise<VerifiedDoctorListResponse> => {
    const response = await client({
      url: 'v1/patient/doctor/verified',
      method: 'GET',
      isProtected: true,
    });

    return response as VerifiedDoctorListResponse;
  };
