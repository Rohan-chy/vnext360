import { ColumnDef } from '@tanstack/react-table';
import { PencilIcon } from 'lucide-react';
import { DeleteAlert } from '@/components/custom-components/delete-alert';
import { CountryFormData } from '../../domain/country.schema';
import { CustomButton } from '@/components/extended/extended-button';
import { useDeleteCountry } from '../../application/usecases/useDeleteCountry';
import CountryActionButtons from '../components/CountryActionButtons';

export const countryColumns = (
  handleEdit: (country: CountryFormData) => void
): ColumnDef<CountryFormData>[] => [
  {
    accessorKey: 'name',
    header: 'Country Name',
  },
  {
    accessorKey: 'code',
    header: 'Country Code',
  },
  {
    accessorKey: 'dialingCode',
    header: 'Dialing Code',
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
      <CountryActionButtons data={row.original} handleEdit={handleEdit} />
    ),
  },
];
