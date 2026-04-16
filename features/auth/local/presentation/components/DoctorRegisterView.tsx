'use client';

import RegisterForm from './RegisterForm';

export default function DoctorRegisterView({ tenant }: { tenant: string }) {
  return (
    <>
      <h1>Doctor Registration</h1>
      <RegisterForm tenant={tenant} />
    </>
  );
}
