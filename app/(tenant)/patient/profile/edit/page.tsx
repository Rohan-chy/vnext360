import ProfilePage from '@/features/tenant/patient/profile/presentation/PatientProfilePage';
import React from 'react';

interface Props {
  params: { id: string };
}
const page = ({ params }: Props) => {
  const { id } = params;
  return <ProfilePage mode="edit" userId={id} />;
};

export default page;
