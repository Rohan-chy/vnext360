import { SearchRepository } from '../../domain';

export const searchGlobal = async (repo: SearchRepository, query: string) => {
  if (!query.trim()) {
    return { doctors: [], clinics: [] };
  }

  return repo.searchGlobal(query);
};
