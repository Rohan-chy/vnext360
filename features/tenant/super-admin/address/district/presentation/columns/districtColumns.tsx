import { ColumnDef } from '@tanstack/react-table';
import { DistrictFormData } from '../../domain/district.schema';
import DistrictActionButtons from '../components/DistrictActionButtons';

export const DistrictColumns = (
  handleEdit: (District: DistrictFormData) => void
): ColumnDef<DistrictFormData>[] => [
  {
    accessorKey: 'name',
    header: 'District',
  },
  {
    accessorKey: 'stateName',
    header: 'State',
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
      <DistrictActionButtons data={row.original} handleEdit={handleEdit} />
    ),
  },
];
