import { ColumnDef } from '@tanstack/react-table';
import { StatusBadge } from '@/shared/components/StatusBadgeEnum';
import { bookingStatusMap } from '@/shared/constants/bookingStatusMap';
import { paymentStatusMap } from '@/shared/constants/paymentStatusMap';
import { paymentOptionsMap } from '@/shared/constants/paymentOptionsMap';
import { AppointmentItem } from '../domain/appointmentBookResponse';
import {
  formatDateYearMonthDay,
  formatTimeHourMinute,
} from '@/lib/date-time-formatter';
import ActionButtons from './components/TableActions';

export const clinicAppointmentColumns = (): ColumnDef<AppointmentItem>[] => [
  {
    accessorKey: 'patientName',
    header: 'Patient',
  },
  {
    accessorKey: 'doctorName',
    header: 'Doctor',
  },

  {
    accessorKey: 'date',
    header: 'Date & Time',
    cell: ({ row }) => {
      const { appointmentBookDate, scheduleTimeFrom, scheduleTimeTo } =
        row.original;

      return (
        <div className="flex flex-col">
          <span>{formatDateYearMonthDay(appointmentBookDate)}</span>
          <span className="text-[12px] text-gray-500">
            {formatTimeHourMinute(scheduleTimeFrom)} -{' '}
            {formatTimeHourMinute(scheduleTimeTo)}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: 'bookingStatus',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.bookingStatus;

      return <StatusBadge status={status} statusMap={bookingStatusMap} />;
    },
  },

  {
    accessorKey: 'fee',
    header: 'Fee',
    cell: ({ row }) => {
      return <span>Rs. {row.original.fee}</span>;
    },
  },

  {
    accessorKey: 'paymentStatus',
    header: 'Payment',
    cell: ({ row }) => {
      const paymentStatus = row.original.paymentStatus;

      return (
        <StatusBadge status={paymentStatus} statusMap={paymentStatusMap} />
      );
    },
  },

  {
    accessorKey: 'paymentOptions',
    header: 'Payment Type',
    cell: ({ row }) => {
      const paymentOptions = row.original.paymentOptions;

      return (
        <StatusBadge status={paymentOptions} statusMap={paymentOptionsMap} />
      );
    },
  },
  // {
  //   accessorKey: 'actions',
  //   header: 'Actions',
  //   cell: ({ row }) => {
  //     const appointment = row.original;
  //     const { id } = appointment;

  //     return <ActionButtons appointmentId={id} />;
  //   },
  // },
];
