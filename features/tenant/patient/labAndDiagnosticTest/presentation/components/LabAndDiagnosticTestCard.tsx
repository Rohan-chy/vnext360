import React from 'react';
import { Lab } from '../../domain/labAndDiagnosticTest.schema';
import Link from 'next/link';

interface LabCardProps {
  lab: Lab;
}

const PRIMARY = '#0D6641';

export const LabAndDiagnosticCard: React.FC<LabCardProps> = ({ lab }) => {
  return (
    <div className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition p-6">
      <div className="flex items-center gap-4">
        <img
          src={lab.image}
          alt={lab.name}
          className="w-20 h-20 rounded-full object-cover border-4"
          style={{ borderColor: PRIMARY }}
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-900">{lab.name}</h3>
          <p className="text-sm font-medium" style={{ color: PRIMARY }}>
            {lab.location}
          </p>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p>Tests Offered: {lab.testsOffered.join(', ')}</p>
        <p>Availability: {lab.availability}</p>
        <p>Contact: {lab.contactNumber}</p>
        <p>
          {lab.accredited && '✅ Accredited'}
          {lab.accredited && lab.reportDelivery.length > 0 && ' • '}
          {lab.reportDelivery.length > 0 &&
            `📄 ${lab.reportDelivery.join(', ')}`}
        </p>
        <p>⭐ {lab.rating}</p>
      </div>

      <Link href={`/client/labAndDiagnosticTest/${lab.id}`}>
        <button
          className="mt-6 w-full py-2 rounded-lg text-white font-medium"
          style={{ backgroundColor: PRIMARY }}
        >
          View Details
        </button>
      </Link>
    </div>
  );
};
