import React from 'react';
import { useRouter } from 'next/navigation';
import { ClinicDoctor } from '../../domain';

interface ClinicDoctorCardProps {
  doctor: ClinicDoctor;
}

const PRIMARY = '#0D6641';

export const ClinicDoctorCard: React.FC<ClinicDoctorCardProps> = ({
  doctor,
}) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/client/doctors/${doctor.id}`);
  };

  return (
    <div className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition p-6">
      <div className="flex items-center gap-4">
        <img
          src={doctor.imageUrl || '/logo/user.jpg'}
          alt={doctor.name}
          className="w-20 h-20 rounded-full object-cover border-4"
          style={{ borderColor: PRIMARY }}
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
          <p className="text-sm font-medium" style={{ color: PRIMARY }}>
            {/* {doctor.specialization} */}
            MBBS, MD,
          </p>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p>Experience: 5 years</p>
        <p>Availability: weekends</p>
        <p>⭐ 5</p>
      </div>

      <button
        onClick={handleNavigate}
        className="mt-6 w-full py-2 rounded-lg text-white font-medium"
        style={{ backgroundColor: PRIMARY }}
      >
        Book Appointment
      </button>
    </div>
  );
};
