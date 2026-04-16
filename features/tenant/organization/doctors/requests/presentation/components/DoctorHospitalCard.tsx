import {
  Calendar,
  Briefcase,
  Hospital,
  PencilIcon,
  FileText,
  X,
  Send,
} from 'lucide-react';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { CustomButton } from '@/components/extended/extended-button';
import { updateOutgoingRequestSchemaFormValues } from '../../domain/outgoingRequest.schema';
import { StatusBadge } from '@/shared/components/StatusBadgeEnum';
import { doctorOrganizationRequestStatusMap } from '@/shared/constants/doctor-organization-request-status';
import { useRequestSubmit } from '../hooks/useRequestSubmit';
import { AppTooltip } from '@/components/custom-components/tooltip-app';

interface DoctorHospitalCardProps {
  outgoing: updateOutgoingRequestSchemaFormValues[];
  handleEdit: (schedule: updateOutgoingRequestSchemaFormValues) => void;
}

export const DoctorHospitalCard: React.FC<DoctorHospitalCardProps> = ({
  outgoing,
  handleEdit,
}) => {
  const { cancelOutgoingRequest, applyOutgoingRequest, loading } =
    useRequestSubmit();
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {outgoing.map((schedule) => {
        const joinDate = new Date(schedule.joiningDate);

        const formattedDate = isNaN(joinDate.getTime())
          ? '-'
          : joinDate.toLocaleDateString();

        return (
          <div
            key={schedule.id}
            className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition"
          >
            {/* Header */}
            <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Hospital className="w-4 h-4 text-gray-600" />
              Hospital
            </h3>

            {/* Details */}

            <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
              <Hospital className="w-3 h-3 text-gray-400" />
              <span className="font-semibold">Clinic ID:</span>{' '}
              {schedule.clinicId || '-'}
            </p>

            <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-gray-400" />
              <span className="font-semibold">Joining Date:</span>{' '}
              {formattedDate}
            </p>

            <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
              <Briefcase className="w-3 h-3 text-gray-400" />
              <span className="font-semibold">Designation:</span>{' '}
              {schedule.designation || '-'}
            </p>

            {schedule.remarks && (
              <p className="text-xs text-gray-500 mb-2 flex items-start gap-1">
                <FileText className="w-3 h-3 text-gray-400 mt-[2px]" />
                <span className="font-semibold">Remarks:</span>{' '}
                {schedule.remarks}
              </p>
            )}

            <div className="flex items-center justify-between mt-2">
              <StatusBadge
                status={schedule.requestStatus}
                statusMap={doctorOrganizationRequestStatusMap}
              />

              <div className="flex space-x-1">
                <AppTooltip content="Edit">
                  <CustomButton
                    size="icon"
                    className="h-6"
                    onClick={() => handleEdit(schedule)}
                  >
                    <PencilIcon className="w-3 h-3" />
                  </CustomButton>
                </AppTooltip>

                {schedule.requestStatus === 0 && schedule.id && (
                  <DeleteAlert
                    action="cancel request"
                    icon={X}
                    tooltip="Cancel request"
                    onClick={() => cancelOutgoingRequest(schedule.id!)}
                    disabled={loading}
                  />
                )}

                {schedule.requestStatus === 1 && schedule.id && (
                  <DeleteAlert
                    action="request"
                    variant="outline"
                    icon={Send}
                    tooltip="Request Hospital"
                    onClick={() => applyOutgoingRequest(schedule.id!)}
                    disabled={loading}
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
