import { ColumnDef } from '@tanstack/react-table';
import { SalutationFormValues } from '../../domain/createSalutation.schema';
import SalutationActionButtons from '../components/SalutationActionButtons';

export const salutationColumns = (
  handleEdit: (data: SalutationFormValues) => void
): ColumnDef<SalutationFormValues>[] => [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <SalutationActionButtons data={row.original} handleEdit={handleEdit} />
    ),
  },
];
