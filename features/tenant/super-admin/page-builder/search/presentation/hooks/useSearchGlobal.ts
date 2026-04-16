'use client';

import { useQuery } from '@tanstack/react-query';
import { SearchRepositoryImpl } from '../../infrastructure/repositories/searchRepositoryImpl';
import { SearchResult } from '../../domain';
import { searchGlobal } from '../../application';

export const useSearchGlobal = (query: string) => {
  return useQuery<SearchResult>({
    queryKey: ['searchGlobal', query],
    queryFn: () => searchGlobal(SearchRepositoryImpl, query),
    enabled: !!query,
    staleTime: 1000 * 60 * 5,
  });
};
