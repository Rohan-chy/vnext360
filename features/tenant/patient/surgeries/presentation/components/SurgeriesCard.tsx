import React from 'react';
import { Surgery } from '../../domain/surgeries.schema';

interface SurgeryCardProps {
  surgery: Surgery;
}

const PRIMARY = '#0D6641';

export const SurgeryCard: React.FC<SurgeryCardProps> = ({ surgery }) => {
  return (
    <div className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition p-6">
      {/* Header with Image and Hospital Name */}
      <div className="flex items-center gap-4">
        <img
          src={surgery.image}
          alt={surgery.hospitalName}
          className="w-20 h-20 rounded-full object-cover border-4"
          style={{ borderColor: PRIMARY }}
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {surgery.hospitalName}
          </h3>
          <p className="text-sm font-medium" style={{ color: PRIMARY }}>
            {surgery.location}
          </p>
        </div>
      </div>

      {/* Surgery Details */}
      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p>Specialties: {surgery.specialties.join(', ')}</p>
        <p>Operating Rooms: {surgery.operatingRooms}</p>
        <p>Availability: {surgery.availability}</p>
        <p>Contact: {surgery.contactNumber}</p>
        <p>{surgery.emergencySupport && '🚨 Emergency Surgery Available'}</p>
        <p>⭐ {surgery.rating}</p>
      </div>

      {/* View Details Button */}
      <button
        className="mt-6 w-full py-2 rounded-lg text-white font-medium"
        style={{ backgroundColor: PRIMARY }}
      >
        View Details
      </button>
    </div>
  );
};
