'use client';
import RegisterForm from './RegisterForm';

export default function PatientRegisterView({ tenant }: { tenant: string }) {
  return (
    <>
      <RegisterForm tenant={tenant} />
    </>
  );
}
