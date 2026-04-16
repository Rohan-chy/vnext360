import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import TableActionButtons from '../components/TableActionButtons';
import { DoctorScheduleItem } from '../../domain/doctorScheduleResponse';
import {
  formatDateYearMonthDay,
  formatTimeHourMinute,
} from '@/lib/date-time-formatter';
import { AppTooltip } from '@/components/custom-components/tooltip-app';
import { CustomButton } from '@/components/extended/extended-button';

export const clinicAllocationColumns = (
  handleEdit: (schedule: DoctorScheduleItem) => void,
  source: string
): ColumnDef<DoctorScheduleItem>[] => [
  {
    accessorKey: 'doctorName',
    header: 'Doctor',
  },

  {
    accessorKey: 'date',
    header: 'Date & Time',
    cell: ({ row }) => {
      const { scheduleDate, scheduleTimeFrom, scheduleTimeTo } = row.original;

      return (
        <div className="flex flex-col">
          <span>{formatDateYearMonthDay(scheduleDate)}</span>
          <span className="text-[12px] text-gray-500">
            {formatTimeHourMinute(scheduleTimeFrom)} -{' '}
            {formatTimeHourMinute(scheduleTimeTo)}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'maxPatientCap',
    header: 'Max Patients',
  },
  {
    accessorKey: 'quotedFee',
    header: 'Fee',
    cell: ({ row }) => `${row.original.quotedFee.toFixed(2)}`,
  },
  {
    accessorKey: 'isApproved',
    header: 'Status',
    cell: ({ row }) => {
      const { isApproved, cancellationReason } = row.original;

      let label = 'Pending';
      let className = 'bg-gray-100 text-gray-600 border border-gray-200';

      if (isApproved) {
        label = 'Approved';
        className = 'bg-green-100 text-green-700 border border-green-200';
      } else if (cancellationReason?.trim()) {
        label = 'Rejected';
        className = 'bg-red-100 text-red-700 border border-red-200';
      }

      return <Badge className={className}>{label}</Badge>;
    },
  },
  {
    accessorKey: 'cancellationReason',
    header: 'Reason',
    cell: ({ row }) => {
      const reason = row.original.cancellationReason;

      if (!reason) return '-';

      return (
        <AppTooltip content={reason}>
          <CustomButton variant={'outline'} className="h-6">
            View
          </CustomButton>
        </AppTooltip>
      );
    },
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      return (
        <TableActionButtons
          data={row.original}
          handleEdit={handleEdit}
          source={source}
        />
      );
    },
  },
];
