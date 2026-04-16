import client from '@/core/network/httpClient';
import { StateListResponseDTO } from './dto/state.dto';

export const getStateByCountryId = async (
  id: string
): Promise<StateListResponseDTO> => {
  return client({
    url: `v1/patient/state/countryId/${id}`,
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
