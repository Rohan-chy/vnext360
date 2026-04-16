import { ColumnDef } from '@tanstack/react-table';
import { WardFormData } from '../../domain/ward.schema';
import WardActionButtons from '../components/WardActionButtons';

export const WardColumns = (
  handleEdit: (Ward: WardFormData) => void
): ColumnDef<WardFormData>[] => [
  {
    accessorKey: 'municipalityName',
    header: 'Municipality',
  },
  {
    accessorKey: 'wardNumber',
    header: 'Ward No.',
  },
  {
    accessorKey: 'isActive',
    header: 'Active',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <WardActionButtons data={row.original} handleEdit={handleEdit} />
    ),
  },
];
