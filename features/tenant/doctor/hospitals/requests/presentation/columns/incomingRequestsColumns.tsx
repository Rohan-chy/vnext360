import { ColumnDef } from '@tanstack/react-table';
import { StatusBadge } from '@/shared/components/StatusBadgeEnum';
import { doctorOrganizationRequestStatusMap } from '@/shared/constants/doctor-organization-request-status';
import { DoctorHospitalRequestResponse } from '../../domain/doctorHospitalResponse';
import { AppTooltip } from '@/components/custom-components/tooltip-app';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { CheckIcon, ClockIcon, X } from 'lucide-react';

export const incomigRequestsColumns = (
  updateStatus: (data: DoctorHospitalRequestResponse, status: number) => void,
  loading: boolean
): ColumnDef<DoctorHospitalRequestResponse>[] => [
  {
    accessorKey: 'clinicName',
    header: 'Clinic Name',
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
      const data = row.original;

      return (
        <div className="flex items-center space-x-1">
          {/* Postponed */}
          <AppTooltip content="Postponed">
            <DeleteAlert
              action="postponed"
              variant="default"
              icon={ClockIcon}
              tooltip="Postponed Request"
              disabled={loading}
              onClick={() => updateStatus(data, 2)}
            />
          </AppTooltip>

          {/* Accepted */}
          <AppTooltip content="Accept">
            <DeleteAlert
              action="accept"
              variant="default"
              icon={CheckIcon}
              tooltip="Accept Request"
              disabled={loading}
              onClick={() => updateStatus(data, 3)}
            />
          </AppTooltip>

          {/* Rejected */}
          <DeleteAlert
            action="reject"
            icon={X}
            tooltip="Reject Request"
            disabled={loading}
            onClick={() => updateStatus(data, 4)}
          />
        </div>
      );
    },
  },
];
