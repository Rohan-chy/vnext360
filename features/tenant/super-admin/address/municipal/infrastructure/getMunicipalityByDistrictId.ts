import client from '@/core/network/httpClient';
import { MunicipalityListResponseDTO } from './dto/municipality.dto';

export const getMunicipalityByDistrictId = async (
  id: string
): Promise<MunicipalityListResponseDTO> => {
  return client({
    url: `v1/patient/municipality/districtId/${id}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
