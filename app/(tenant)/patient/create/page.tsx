import PatientCreateForm from '@/features/tenant/patient/ownProfile/presentation/components/patientCreateForm';

export default function Page() {
  return (
    <div>
      <h1>Create Patient</h1>
      <PatientCreateForm />
    </div>
  );
}

// Form (Client)
//    ↓
// Server Action
//    ↓
// Use Case
//    ↓
// Repository Interface
//    ↓
// Infrastructure Implementation
//    ↓
// .NET API
