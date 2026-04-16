import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { getTenants } from '../../domain/getTenants.schema';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { EllipsisVertical } from 'lucide-react';
import { useActivateTenant } from '../../application/usecases/useActivateTenant';
import { ActivateDeactivateAlert } from '@/components/custom-components/active-deactivate-alert';
import { useDeactivateTenant } from '../../application/usecases/useDeactivateTenant';
import { useState } from 'react';
import UpgradeTenant from '../components/UpgradeTenantForm';

export const tenantColumns = ({
  onEdit,
}: {
  onEdit: (tenant: getTenants) => void;
}): ColumnDef<getTenants>[] => [
  {
    accessorKey: 'id',
    header: 'Tenant ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'adminEmail',
    header: 'Admin Email',
  },
  {
    accessorKey: 'issuer',
    header: 'Issuer',
  },
  {
    accessorKey: 'isActive',
    header: 'Status',
    cell: ({ row }) => (
      <Badge
        className={
          row.original.isActive
            ? 'bg-green-100 text-green-700 border border-green-200'
            : 'bg-gray-100 text-gray-600 border border-gray-200'
        }
      >
        {row.original.isActive ? 'Active' : 'Inactive'}
      </Badge>
    ),
  },
  {
    accessorKey: 'validUpto',
    header: 'Valid Upto',
    cell: ({ row }) => new Date(row.original.validUpto).toLocaleDateString(),
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const { id, isActive } = row.original;
      const { mutate: activateTenant, isPending: activatePending } =
        useActivateTenant();
      const { mutate: deActivateTenant, isPending: deactivatePending } =
        useDeactivateTenant();

      const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);

      const isLoading = activatePending || deactivatePending;
      const action = isActive ? 'Deactivate' : 'Activate';

      const handleActivateDeactivate = () => {
        if (isActive) {
          deActivateTenant({ id });
        } else {
          activateTenant({ id });
        }
      };

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <EllipsisVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit(row.original)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild variant="destructive">
                <ActivateDeactivateAlert
                  disabled={isLoading}
                  loading={isLoading}
                  action={action}
                  onClick={handleActivateDeactivate}
                />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {/* New Subscription Button */}
              <DropdownMenuItem onClick={() => setIsUpgradeOpen(true)}>
                Subscription
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* UpgradeTenant Dialog */}
          {isUpgradeOpen && (
            <UpgradeTenant
              tenantId={id} // pass the tenant id to the form
              onClose={() => setIsUpgradeOpen(false)}
            />
          )}
        </>
      );
    },
  },
];
