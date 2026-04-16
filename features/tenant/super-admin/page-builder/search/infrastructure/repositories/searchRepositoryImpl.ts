import client from '@/core/network/httpClient';
import { SearchRepository } from '../../domain/repositories/searchRepository';
import { SearchGlobalResponseDTO } from '../dto/searchGlobal.dto';
import { mapSearchResultToEntity } from '../mapper/search.mapper';

export const SearchRepositoryImpl: SearchRepository = {
  async searchGlobal(query: string) {
    const response = await client<SearchGlobalResponseDTO>({
      // encodeURIComponent
      // ensures the query is safely included in the URL
      //  (e.g., spaces → %20, special characters handled properly
      url: `v1/patient/doctor/search?query=${encodeURIComponent(query)}`,
      method: 'GET',
      isProtected: false,
      tokenSource: 'session',
    });

    return mapSearchResultToEntity(response);
  },
};
