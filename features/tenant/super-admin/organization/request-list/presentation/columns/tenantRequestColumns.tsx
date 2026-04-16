import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { TenantRequest } from '../../domain/getTenantRequest.schema';
import TenantRequestActions from '../components/TenantRequestActions';

// Column definitions
export const tenantRequestColumns = ({
  handleEdit,
}: {
  handleEdit: (company: TenantRequest) => void;
}): ColumnDef<TenantRequest>[] => [
  {
    accessorKey: 'name',
    header: 'Username',
  },
  {
    accessorKey: 'companyName',
    header: 'Company',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Phone',
  },
  // {
  //   accessorKey: 'password',
  //   header: 'Password',
  // },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'isActive',
    header: 'Status',
    cell: ({ row }) => (
      <Badge
        className={
          row.original.isApproved
            ? 'bg-green-100 text-green-700 border border-green-200'
            : 'bg-gray-100 text-gray-600 border border-gray-200'
        }
      >
        {row.original.isApproved ? 'Approved' : 'Pending'}
      </Badge>
    ),
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <TenantRequestActions data={row.original} onEdit={handleEdit} />
    ),
  },
];
