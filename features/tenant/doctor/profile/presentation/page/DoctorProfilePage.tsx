'use client';

import { useState } from 'react';
import { Pencil, Eye } from 'lucide-react';

import { useGetDoctorProfile } from '../../application/usecases/useGetDoctorProfile';
import { useGetDocumentTypeByType } from '../../application/usecases/useGetDocumentTypeByType';

import DoctorVerificationForm from '../components/DoctorVerificationAllSections';
import DoctorProfileCard from '@/features/tenant/super-admin/doctor/doctor-verification/presentation/components/DoctorProfileCard';
import { CertificationTable } from '@/features/tenant/super-admin/doctor/doctor-verification/presentation/components/CertificationTable';
import { ExperienceTable } from '@/features/tenant/super-admin/doctor/doctor-verification/presentation/components/ExperienceTable';
import { TrainingTable } from '@/features/tenant/super-admin/doctor/doctor-verification/presentation/components/TrainingTable';
import { ResearchTable } from '@/features/tenant/super-admin/doctor/doctor-verification/presentation/components/ResearchTable';
import { BankDetailsCard } from '@/features/tenant/super-admin/doctor/doctor-verification/presentation/components/BankDetailsCard';
import { NomineeList } from '@/features/tenant/super-admin/doctor/doctor-verification/presentation/components/NomineeList';
import { RelativeList } from '@/features/tenant/super-admin/doctor/doctor-verification/presentation/components/RelativeList';
import { CustomButton } from '@/components/extended/extended-button';
import { useGetDoctorVerificationOwn } from '../../application/usecases/useGetDoctorVerificationOwn';

const tabToDocumentTypeMap: Record<string, number> = {
  education: 0,
  experience: 1,
  training: 2,
  research: 3,
};

const DoctorProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');

  // API calls
  const { data: doctorProfileData } = useGetDoctorProfile();
  const { data: verifyDoctorData } = useGetDoctorVerificationOwn();

  const currentType = tabToDocumentTypeMap[activeTab] ?? null;
  const { data: documentTypeData } = useGetDocumentTypeByType(currentType);

  const toggleMode = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <main className="space-y-3">
      <header className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-4 text-primary">
          Profile Settings
        </h2>
        {/* Toggle Button */}
        <div className="mt-1 flex justify-end">
          <CustomButton
            type="button"
            size="sm"
            onClick={toggleMode}
            className="flex items-center gap-2 cursor-pointer"
          >
            {isEditing ? (
              <>
                <Eye size={16} /> View Profile
              </>
            ) : (
              <>
                <Pencil size={16} /> Complete Profile
              </>
            )}
          </CustomButton>
        </div>
      </header>

      {/* VIEW MODE */}
      {!isEditing && (
        <div className="space-y-3 overflow-hidden border rounded-lg p-4">
          <DoctorProfileCard profile={doctorProfileData} />
          <CertificationTable
            data={verifyDoctorData?.doctorCertifications || []}
          />
          <ExperienceTable data={verifyDoctorData?.doctorExperiences || []} />
          <TrainingTable data={verifyDoctorData?.doctorTrainings || []} />
          <ResearchTable data={verifyDoctorData?.doctorResearches || []} />
          <BankDetailsCard data={verifyDoctorData?.doctorBankDetails || []} />
          <NomineeList data={verifyDoctorData?.doctorNominees || []} />
          <RelativeList data={verifyDoctorData?.doctorRelatives || []} />
        </div>
      )}

      {/* EDIT MODE */}
      {isEditing && (
        <DoctorVerificationForm
          doctorProfileData={doctorProfileData}
          verifyDoctorData={verifyDoctorData}
          documentTypeData={documentTypeData?.dynamicDocumentTypes}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
    </main>
  );
};

export default DoctorProfilePage;
