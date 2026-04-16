import client from '@/core/network/httpClient';
import { DistrictListResponseDTO } from './dto/district.dto';

export const getDistrictByStateId = async (
  id: string
): Promise<DistrictListResponseDTO> => {
  return client({
    url: `v1/patient/district/stateId/${id}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
