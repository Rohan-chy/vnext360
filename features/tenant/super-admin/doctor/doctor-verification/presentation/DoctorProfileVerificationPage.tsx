'use client';

import { SpinnerCustom } from '@/components/custom-components/SpinnerCustom';
import { useGetDoctorVerificationByDoctorId } from '@/features/tenant/doctor/profile/application/usecases/useGetDoctorVerificationByDoctorId';
import { useGetDoctorById } from '@/features/tenant/super-admin/doctor/doctor-request-approval/application/usecases/useGetDoctorById';
import { BankDetailsCard } from '@/features/tenant/super-admin/doctor/doctor-verification/presentation/components/BankDetailsCard';
import { CertificationTable } from '@/features/tenant/super-admin/doctor/doctor-verification/presentation/components/CertificationTable';
import DoctorProfileCard from '@/features/tenant/super-admin/doctor/doctor-verification/presentation/components/DoctorProfileCard';
import { ExperienceTable } from '@/features/tenant/super-admin/doctor/doctor-verification/presentation/components/ExperienceTable';
import { NomineeList } from '@/features/tenant/super-admin/doctor/doctor-verification/presentation/components/NomineeList';
import { RelativeList } from '@/features/tenant/super-admin/doctor/doctor-verification/presentation/components/RelativeList';
import { ResearchTable } from '@/features/tenant/super-admin/doctor/doctor-verification/presentation/components/ResearchTable';
import { TrainingTable } from '@/features/tenant/super-admin/doctor/doctor-verification/presentation/components/TrainingTable';
import { VerificationActions } from '@/features/tenant/super-admin/doctor/doctor-verification/presentation/components/VerificationActions';
import { useParams } from 'next/navigation';

const DoctorProfileVerificationPage = () => {
  const params = useParams();
  const doctorId = params?.id;

  // If doctorId is undefined, show nothing or redirect
  if (!doctorId || Array.isArray(doctorId)) {
    return <SpinnerCustom />;
  }

  const { data: DoctorProfile, isLoading: isProfileLoading } =
    useGetDoctorById(doctorId);

  const { data: doctorData, isLoading: isDoctorDataLoading } =
    useGetDoctorVerificationByDoctorId(doctorId);

  const verifiedDoctor = doctorData?.doctorVerification?.isVerified;

  if (
    !DoctorProfile ||
    !doctorData ||
    isProfileLoading ||
    isDoctorDataLoading
  ) {
    return <SpinnerCustom />;
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* left side   */}
      <div
        className={`${!verifiedDoctor ? 'xl:col-span-2' : 'xl:col-span-full'} space-y-6`}
      >
        <DoctorProfileCard profile={DoctorProfile} />
        <CertificationTable
          data={doctorData?.doctorCertifications || []}
          admin={true}
        />
        <ExperienceTable
          data={doctorData?.doctorExperiences || []}
          admin={true}
        />
        <TrainingTable data={doctorData?.doctorTrainings || []} admin={true} />
        <ResearchTable data={doctorData?.doctorResearches || []} admin={true} />
        <BankDetailsCard
          data={doctorData?.doctorBankDetails || []}
          admin={true}
        />
        <NomineeList data={doctorData?.doctorNominees || []} admin={true} />
        <RelativeList data={doctorData?.doctorRelatives || []} admin={true} />
      </div>
      {/* right side  */}
      {!verifiedDoctor && (
        <div>
          <VerificationActions verification={doctorData?.doctorVerification} />
        </div>
      )}
    </div>
  );
};

export default DoctorProfileVerificationPage;
