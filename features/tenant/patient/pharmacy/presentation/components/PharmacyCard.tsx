import React from 'react';
import { Pharmacy } from '../../domain/pharmacy.schema';

interface PharmacyCardProps {
  pharmacy: Pharmacy;
}

const PRIMARY = '#0D6641';

export const PharmacyCard: React.FC<PharmacyCardProps> = ({ pharmacy }) => {
  return (
    <div className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition p-6">
      <div className="flex items-center gap-4">
        <img
          src={pharmacy.image}
          alt={pharmacy.name}
          className="w-20 h-20 rounded-full object-cover border-4"
          style={{ borderColor: PRIMARY }}
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {pharmacy.name}
          </h3>
          <p className="text-sm font-medium" style={{ color: PRIMARY }}>
            {pharmacy.location}
          </p>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p>Services: {pharmacy.services.join(', ')}</p>
        <p>Availability: {pharmacy.availability}</p>
        <p>Contact: {pharmacy.contactNumber}</p>
        <p>
          {pharmacy.isOpen24Hours && '🕒 Open 24 Hours'}
          {pharmacy.isOpen24Hours && pharmacy.homeDelivery && ' • '}
          {pharmacy.homeDelivery && '🚚 Home Delivery'}
        </p>
        <p>⭐ {pharmacy.rating}</p>
      </div>

      <button
        className="mt-6 w-full py-2 rounded-lg text-white font-medium"
        style={{ backgroundColor: PRIMARY }}
      >
        View Details
      </button>
    </div>
  );
};
