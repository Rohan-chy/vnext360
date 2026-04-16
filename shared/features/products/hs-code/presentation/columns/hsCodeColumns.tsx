import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { formatDateYearMonthDay } from '@/lib/date-time-formatter';
import { AppTooltip } from '@/components/custom-components/tooltip-app';
import { hsCodeResponseItem } from '../../domain/schema/hsCodeResponse.schema';
import TableActionButtons from '../components/TableActionButtons';

export const hsCodeColumns = (
  handleEdit: (product: hsCodeResponseItem) => void
): ColumnDef<hsCodeResponseItem>[] => [
  {
    accessorKey: 'hsCode',
    header: 'HS Code',
  },

  {
    accessorKey: 'activateDate',
    header: 'Activate Date',
    cell: ({ row }) => {
      return formatDateYearMonthDay(row.original.activateDate);
    },
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => {
      const description = row.original.description;

      if (!description) return '-';

      return (
        <AppTooltip content={description}>
          <span className="max-w-[200px] truncate block cursor-pointer">
            {description}
          </span>
        </AppTooltip>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const today = new Date();
      const activateDate = new Date(row.original.activateDate);

      const isActive = activateDate <= today;

      return (
        <Badge
          className={
            isActive
              ? 'bg-green-100 text-green-700 border border-green-200'
              : 'bg-gray-100 text-gray-600 border border-gray-200'
          }
        >
          {isActive ? 'Active' : 'Pending'}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      return <TableActionButtons data={row.original} handleEdit={handleEdit} />;
    },
  },
];
