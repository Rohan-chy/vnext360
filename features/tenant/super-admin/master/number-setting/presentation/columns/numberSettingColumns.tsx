import { ColumnDef } from '@tanstack/react-table';
import { NumberSettingResponse } from '../../domain/getNumberSetting.schema';
import { Button } from '@/components/ui/button';
import { PencilIcon } from 'lucide-react';
import { DeleteAlert } from '@/components/custom-components/delete-alert';

export const numberSettingColumns = (
  handleEdit: (numberSetting: NumberSettingResponse) => void
): ColumnDef<NumberSettingResponse>[] => [
  {
    accessorKey: 'prefix',
    header: 'Prefix',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'startingNumber',
    header: 'Starting Number',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'currentNumber',
    header: 'Current Number',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'suffix',
    header: 'Suffix',
    cell: (info) => info.getValue(),
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const { id } = row.original;

      // const { mutate: deleteClinic, isPending: deletePending } =
      //   useDeleteClinic();
      return (
        <div className="space-x-1">
          <Button
            variant="default"
            size="icon"
            className="h-6"
            onClick={() => handleEdit(row.original)}
          >
            <PencilIcon className="w-3 h-3" />
          </Button>

          {/* <DeleteAlert
            disabled={deletePending}
            loading={deletePending}
            onClick={() => deleteClinic({ id })}
          /> */}
        </div>
      );
    },
  },
];
