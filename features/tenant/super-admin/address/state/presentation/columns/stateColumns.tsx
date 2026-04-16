import { ColumnDef } from '@tanstack/react-table';
import { stateFormData } from '../../domain/state.schema';
import StateActionButtons from '../components/StateActionButtons';

export const StateColumns = (
  handleEdit: (State: stateFormData) => void
): ColumnDef<stateFormData>[] => [
  {
    accessorKey: 'name',
    header: 'State Name',
  },
  {
    accessorKey: 'countryName',
    header: 'Country',
  },
  {
    accessorKey: 'sortingId',
    header: 'Sort Order',
  },
  {
    accessorKey: 'isActive',
    header: 'Active',
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <StateActionButtons data={row.original} handleEdit={handleEdit} />
    ),
  },
];
