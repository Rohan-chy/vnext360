'use client';

import { Calendar, User } from 'lucide-react';
import { StatusBadge } from '@/shared/components/StatusBadgeEnum';
import { doctorOrganizationRequestStatusMap } from '@/shared/constants/doctor-organization-request-status';

interface DoctorHospitalCardProps {
  data: any[];
}

export const ApprovedCard: React.FC<DoctorHospitalCardProps> = ({ data }) => {
  return (
    <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.map((hospital: any) => (
        <div
          key={hospital.id}
          className="border rounded-xl shadow-sm hover:shadow-lg transition bg-white relative"
        >
          {/* Status Badge */}
          <span className="absolute top-3 right-0 px-3 py-1 rounded-full text-white text-xs">
            <StatusBadge
              //   status={hospital?.requestStatus}
              status={3} //accepted enum
              statusMap={doctorOrganizationRequestStatusMap}
            />
          </span>

          {/* Header */}
          <div className="bg-primary text-primary-foreground p-3 rounded-t-xl">
            <h2 className="text-xl font-semibold">{hospital.name}</h2>
            {/* <p className="text-sm opacity-90 flex items-center gap-1">
            <MapPin size={16} /> {hospital.location}
          </p> */}
          </div>

          {/* Body */}
          <div className="p-3 text-gray-700 text-sm space-y-3">
            <div className="flex justify-between items-center">
              <div className="text-muted-foreground flex items-center gap-1">
                <User size={16} />
                <span>Designation</span>
              </div>
              <span className="font-medium text-right">
                {hospital.designation}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-muted-foreground flex items-center gap-1">
                <Calendar size={16} />
                <span>Joining Date</span>
              </div>
              <span className="font-medium text-right">
                {new Date(hospital.joiningDate).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-muted-foreground flex items-center gap-1">
                <User size={16} />
                <span>Remarks</span>
              </div>
              <span className="font-medium text-right">
                {hospital.remarks || '-'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
