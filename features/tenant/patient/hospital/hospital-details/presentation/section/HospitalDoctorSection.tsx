import { DoctorCard } from '@/features/tenant/patient/find-doctor/presentation/components/DoctorCard';

const HospitalDoctorSection = ({ hospital }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {hospital.doctors?.map((doctor: any, i: number) => (
        <DoctorCard key={i} doctor={doctor} />
      ))}
    </div>
  );
};

export default HospitalDoctorSection;
