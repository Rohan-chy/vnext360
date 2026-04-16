import React from 'react';
import { Hospital } from '../../domain/hospital.schema';
import { useRouter } from 'next/navigation';

interface HospitalCardProps {
  hospital: Hospital;
}

const PRIMARY = '#0D6641';

export const HospitalCard: React.FC<HospitalCardProps> = ({ hospital }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/client/hospitals/${hospital.id}`);
  };

  return (
    <div className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition p-6">
      <div className="flex items-center gap-4">
        <img
          src={hospital.image}
          alt={hospital.name}
          className="w-20 h-20 rounded-full object-cover border-4"
          style={{ borderColor: PRIMARY }}
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {hospital.name}
          </h3>
          <p className="text-sm font-medium" style={{ color: PRIMARY }}>
            {hospital.location}
          </p>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p>Departments: {hospital.departments.join(', ')}</p>
        <p>Bed Capacity: {hospital.bedCapacity} beds</p>
        <p>Availability: {hospital.availability}</p>
        <p>⭐ {hospital.rating}</p>
      </div>

      <button
        onClick={handleNavigate}
        className="mt-6 w-full py-2 rounded-lg text-white font-medium"
        style={{ backgroundColor: PRIMARY }}
      >
        View Details
      </button>
    </div>
  );
};
