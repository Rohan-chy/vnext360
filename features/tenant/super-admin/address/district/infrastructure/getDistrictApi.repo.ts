import client from '@/core/network/httpClient';
import { DistrictListResponseDTO } from './dto/district.dto';

export const getDistrict = async (): Promise<DistrictListResponseDTO> => {
  return await client({
    url: 'v1/patient/district',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
