import { SearchResult } from '../entities/searchResult.entity';

export interface SearchRepository {
  searchGlobal(query: string): Promise<SearchResult>;
}
