import { ClinicRepository } from '../../domain';

export const getClinicById = async (repo: ClinicRepository, id: string) => {
  return await repo.getClinicById(id);
};
