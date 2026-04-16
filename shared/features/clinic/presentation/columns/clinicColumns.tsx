import { ColumnDef } from '@tanstack/react-table';
import { ClinicResponse } from '../../domain/schemas/getClinic.schema';
import ClinicActions from '../components/ClinicActionButtons';
import UploadClinicBulkImages from '../components/UploadClinicBulkImages';

export const clinicColumns = (
  handleEdit: (clinic: ClinicResponse) => void
): ColumnDef<ClinicResponse>[] => [
  {
    accessorKey: 'name',
    header: 'Clinic',
  },
  {
    accessorKey: 'location',
    header: 'Address',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
  {
    accessorKey: 'pan',
    header: 'PAN',
    cell: ({ row }) => row.original.pan ?? '—',
  },
  {
    accessorKey: 'contactNo',
    header: 'Contact',
  },
  {
    accessorKey: 'manager',
    header: 'Manager',
  },
  {
    accessorKey: 'registrationNumber',
    header: 'Reg. No',
  },
  {
    accessorKey: 'registrationDate',
    header: 'Reg. Date',
    cell: ({ row }) => {
      const date = new Date(row.original.registrationDate);
      return isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleDateString();
    },
  },
  {
    accessorKey: 'file',
    header: 'File',
    cell: ({ row }) => <UploadClinicBulkImages data={row.original} />,
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <ClinicActions data={row.original} handleEdit={handleEdit} />
    ),
  },
];
