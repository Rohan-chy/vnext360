import React from 'react';
import { Doctor } from '../../domain/findDoctor.schema';
import { useRouter } from 'next/navigation';

interface DoctorCardProps {
  doctor: Doctor;
}

const PRIMARY = '#0D6641';

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/client/doctors/${doctor.id}`);
  };

  return (
    <div className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition p-6">
      <div className="flex items-center gap-4">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-20 h-20 rounded-full object-cover border-4"
          style={{ borderColor: PRIMARY }}
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
          <p className="text-sm font-medium" style={{ color: PRIMARY }}>
            {doctor.specialization}
          </p>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p>Experience: {doctor.experience} years</p>
        <p>Availability: {doctor.availability}</p>
        <p>⭐ {doctor.rating}</p>
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
