import { getOwnPatientProfile } from '@/features/tenant/patient/ownProfile/application/useCases/getOwnPatientProfile';
import { PatientRepository } from '@/features/tenant/patient/ownProfile/infrastructure/repositories/patientRepository';
import PatientProfileView from '@/features/tenant/patient/ownProfile/presentation/components/patientProfileView';

export default async function Page() {
  const repository = new PatientRepository();

  const patient = await getOwnPatientProfile(repository);

  return (
    <div>
      <h1>My Profile</h1>
      <PatientProfileView patient={patient} />
    </div>
  );
}

// Page (Server Component)
//    ↓
// Use Case
//    ↓
// Repository Interface
//    ↓
// Infrastructure Implementation
//    ↓
// .NET API
