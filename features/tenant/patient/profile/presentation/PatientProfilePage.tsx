'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import PatientProfileInfoForm from './components/PatientProfileInfoForm';
import { useGetPatientDetails } from '../application/usecases/useGetPatientDetails';

type Props = {
  mode: 'view' | 'edit';
  userId?: string;
};

const PatientProfilePage = ({ mode, userId }: Props) => {
  const { data: patientProfileData } = useGetPatientDetails();

  return (
    <>
      <PatientProfileInfoForm
        mode={mode}
        patientProfileData={patientProfileData}
      />
    </>
  );
};

export default PatientProfilePage;
