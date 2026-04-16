import { ColumnDef } from '@tanstack/react-table';
import { MunicipalFormData } from '../../domain/municipal.schema';
import MunicipalActionButtons from '../components/MunicipalActionButtons';

export const MunicipalColumns = (
  handleEdit: (Municipal: MunicipalFormData) => void
): ColumnDef<MunicipalFormData>[] => [
  {
    accessorKey: 'name',
    header: 'Municipal',
  },
  {
    accessorKey: 'type',
    header: 'Municipal Type',
  },
  {
    accessorKey: 'districtName',
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
      <MunicipalActionButtons data={row.original} handleEdit={handleEdit} />
    ),
  },
];
