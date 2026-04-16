import { axiosInstance } from '@/core/api/axiosInstance';
import { IPatientRepository } from '../../domain/repositories/IPatientRepository';
import { Patient } from '../../domain/entities/Patient';

export class PatientRepository implements IPatientRepository {
  async create(patient: Patient): Promise<void> {
    await axiosInstance.post(
      `/api/v1/patient/patientdetails/separate`,
      patient
    );
  }
  async getOwn(): Promise<Patient> {
    const response = await axiosInstance.get(
      `/api/v1/patient/patientdetails/own`
    );

    return response.data;
  }
}

// Inside Server Component → use fetch
// Inside Repository → use axios
