import client from '@/core/network/httpClient';
import { MunicipalityListResponseDTO } from './dto/municipality.dto';

export const getMunicipal = async (): Promise<MunicipalityListResponseDTO> => {
  return await client({
    url: 'v1/patient/municipality',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
