'use client';

import { Calendar, PencilIcon, X, Send, User } from 'lucide-react';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { StatusBadge } from '@/shared/components/StatusBadgeEnum';
import { doctorOrganizationRequestStatusMap } from '@/shared/constants/doctor-organization-request-status';
import { useRequestSubmit } from '../hooks/useRequestSubmit';
import { AppTooltip } from '@/components/custom-components/tooltip-app';
import { Button } from '@/components/ui/button';
import { DoctorHospitalRequestResponse } from '../../domain/doctorHospitalResponse';

interface DoctorHospitalCardProps {
  outgoing: DoctorHospitalRequestResponse[];
  handleEdit: (schedule: DoctorHospitalRequestResponse) => void;
}

export const DoctorHospitalCard: React.FC<DoctorHospitalCardProps> = ({
  outgoing,
  handleEdit,
}) => {
  const { cancelOutgoingRequest, applyOutgoingRequest, loading } =
    useRequestSubmit();

  return (
    <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {outgoing?.map((hospital: any) => (
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
            <AppTooltip content="Edit">
              <Button
                size="icon"
                className="h-6"
                variant="outline"
                onClick={() => handleEdit(hospital)}
              >
                <PencilIcon className="w-3 h-3" />
              </Button>
            </AppTooltip>

            {hospital.requestStatus === 0 && hospital.id && (
              <DeleteAlert
                action="cancel request"
                icon={X}
                tooltip="Cancel request"
                onClick={() => cancelOutgoingRequest(hospital.id)}
                disabled={loading}
              />
            )}

            {hospital.requestStatus === 1 && hospital.id && (
              <DeleteAlert
                action="request"
                variant="outline"
                icon={Send}
                tooltip="Request Hospital"
                onClick={() => applyOutgoingRequest(hospital.id)}
                disabled={loading}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
