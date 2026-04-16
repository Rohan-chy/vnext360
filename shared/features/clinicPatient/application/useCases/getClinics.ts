import { ClinicRepository } from '../../domain';

export const getClinics = async (repo: ClinicRepository) => {
  return await repo.getClinics();
};
