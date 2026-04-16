import { IPatientRepository } from '../../domain/repositories/IPatientRepository';
import { Patient } from '../../domain/entities/Patient';

export const createPatientProfile = async (
  repository: IPatientRepository,
  patient: Patient
) => {
  // Business rules can be added here later
  return await repository.create(patient);
};
