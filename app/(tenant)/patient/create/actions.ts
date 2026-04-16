'use server';

import { createPatientProfile } from '@/features/tenant/patient/ownProfile/application/useCases/createPatientProfile';
import { Patient } from '@/features/tenant/patient/ownProfile/domain/entities/Patient';
import { PatientRepository } from '@/features/tenant/patient/ownProfile/infrastructure/repositories/patientRepository';

export async function createPatientAction(data: Patient) {
  const repository = new PatientRepository();

  await createPatientProfile(repository, data);

  return { success: true };
}
