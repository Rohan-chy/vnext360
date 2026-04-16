import client from '@/core/network/httpClient';
import { StateListResponseDTO } from './dto/state.dto';

export const getState = async (): Promise<StateListResponseDTO> => {
  return await client({
    url: 'v1/patient/state',
    method: 'GET',
    isProtected: true,
    tokenSource: 'session',
  });
};
