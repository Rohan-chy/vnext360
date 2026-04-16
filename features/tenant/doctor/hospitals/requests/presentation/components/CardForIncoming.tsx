'use client';

import { Calendar, X, ClockIcon, CheckIcon, User } from 'lucide-react';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { StatusBadge } from '@/shared/components/StatusBadgeEnum';
import { doctorOrganizationRequestStatusMap } from '@/shared/constants/doctor-organization-request-status';
import { useRequestSubmit } from '../hooks/useRequestSubmit';
import { AppTooltip } from '@/components/custom-components/tooltip-app';
import { DoctorHospitalRequestResponse } from '../../domain/doctorHospitalResponse';

interface DoctorHospitalCardProps {
  incoming: DoctorHospitalRequestResponse[];
  loading: boolean;
  updateStatus: (data: DoctorHospitalRequestResponse, status: number) => void;
}

export const CardForIncoming: React.FC<DoctorHospitalCardProps> = ({
  incoming,
}) => {
  const { updateStatus, loading } = useRequestSubmit();

  return (
    <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {incoming?.map((hospital: any) => (
        <div
          key={hospital.id}
          className="border rounded-xl shadow-sm hover:shadow-lg transition bg-white relative"
        >
          {/* Status Badge */}
          <span className="absolute top-3 right-0 px-3 py-1 rounded-full text-white text-xs">
            <StatusBadge
              status={hospital?.requestStatus}
              statusMap={doctorOrganizationRequestStatusMap}
            />
          </span>

          {/* Header */}
          <div className="bg-primary text-primary-foreground p-3 rounded-t-xl">
            <h2 className="text-xl font-semibold">{hospital.clinicName}</h2>
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

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 mt-4 p-3 border-t">
            {/* Postponed */}
            <AppTooltip content="Postponed">
              <DeleteAlert
                action="postponed"
                variant="outline"
                icon={ClockIcon}
                tooltip="Postponed Request"
                disabled={loading}
                onClick={() => updateStatus(hospital, 2)}
              />
            </AppTooltip>

            {/* Accepted */}
            <AppTooltip content="Accept">
              <DeleteAlert
                action="accept"
                variant="outline"
                icon={CheckIcon}
                tooltip="Accept Request"
                disabled={loading}
                onClick={() => updateStatus(hospital, 3)}
              />
            </AppTooltip>

            {/* Rejected */}
            <DeleteAlert
              action="reject"
              icon={X}
              tooltip="Reject Request"
              disabled={loading}
              onClick={() => updateStatus(hospital, 4)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
