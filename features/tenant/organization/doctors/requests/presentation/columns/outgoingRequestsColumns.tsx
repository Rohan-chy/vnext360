import { ColumnDef } from '@tanstack/react-table';
import { StatusBadge } from '@/shared/components/StatusBadgeEnum';
import { doctorOrganizationRequestStatusMap } from '@/shared/constants/doctor-organization-request-status';
import { DoctorHospitalRequestResponse } from '../../domain/doctorHospitalResponse';
import { CustomButton } from '@/components/extended/extended-button';
import { PencilIcon, Send, X } from 'lucide-react';
import { AppTooltip } from '@/components/custom-components/tooltip-app';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { useRequestSubmit } from '../hooks/useRequestSubmit';

export const outgoingRequestsColumns = (
  handleEdit: (data: DoctorHospitalRequestResponse) => void
): ColumnDef<DoctorHospitalRequestResponse>[] => [
  {
    accessorKey: 'doctorName',
    header: 'Doctor Name',
  },
  {
    accessorKey: 'joiningDate',
    header: 'Joining Date',
    cell: ({ row }) => {
      const date = new Date(row.original.joiningDate);
      return isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleDateString();
    },
  },
  {
    accessorKey: 'designation',
    header: 'Designation',
  },
  {
    accessorKey: 'remarks',
    header: 'Remarks',
  },
  {
    accessorKey: 'requestStatus',
    header: 'Status',
    cell: ({ row }) => (
      <StatusBadge
        status={row.original.requestStatus}
        statusMap={doctorOrganizationRequestStatusMap}
      />
    ),
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const { id, requestStatus } = row.original;

      const { cancelOutgoingRequest, applyOutgoingRequest, loading } =
        useRequestSubmit();

      return (
        <div className="flex space-x-1">
          <AppTooltip content="Edit">
            <CustomButton
              size="icon"
              className="h-6"
              onClick={() => handleEdit(row.original)}
            >
              <PencilIcon className="w-3 h-3" />
            </CustomButton>
          </AppTooltip>

          {requestStatus === 0 && id && (
            <DeleteAlert
              action="cancel request"
              icon={X}
              tooltip="Cancel request"
              onClick={() => cancelOutgoingRequest(id!)}
              disabled={loading}
            />
          )}

          {requestStatus === 1 && id && (
            <DeleteAlert
              action="request"
              variant="outline"
              icon={Send}
              tooltip="Request Hospital"
              onClick={() => applyOutgoingRequest(id!)}
              disabled={loading}
            />
          )}
        </div>
      );
    },
  },
];
