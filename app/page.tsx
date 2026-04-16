import SuperAdminLoginForm from '@/features/tenant/super-admin/auth/presentation/components/SuperAdminLoginForm';
import DoctorLandingPage from '@/shared/components/DoctorLandingPage';
import PatientLandingPage from '@/shared/components/PatientLandingPage';
import { headers } from 'next/headers';

export default async function HomePage() {
  const headersList = await headers();
  // const tenant = headersList.get('x-tenant');

  const host = headersList.get('host') || 'localhost:3000';
  const tenant = host.split('.')[0];

  switch (tenant) {
    case 'patient':
      return <PatientLandingPage />;
    case 'doctor':
      return <DoctorLandingPage />;
    default:
      // return <LandingPage />;
      return <SuperAdminLoginForm />;
  }
}
