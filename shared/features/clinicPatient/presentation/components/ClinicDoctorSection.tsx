import { Clinic, ClinicDoctor } from '../../domain';
import { ClinicDoctorCard } from './ClinicDoctorCard';

const ClinicDoctorSection = ({ clinic }: { clinic: Clinic }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {clinic.doctors?.map((doctor: ClinicDoctor, i: number) => (
        <ClinicDoctorCard key={i} doctor={doctor} />
      ))}
    </div>
  );
};

export default ClinicDoctorSection;
