import { Patient } from '../entities/Patient';

export interface IPatientRepository {
  create(patient: Patient): Promise<void>;
  getOwn(): Promise<Patient>;
}
