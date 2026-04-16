import { IPatientRepository } from '../../domain/repositories/IPatientRepository';

export const getOwnPatientProfile = async (repository: IPatientRepository) => {
  return await repository.getOwn();
};
