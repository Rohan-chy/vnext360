'use client';

import { useState } from 'react';
import DataTable from '@/components/custom-components/table/data-table';
import { tenantColumns } from '../columns/tenantColumns';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import CreateTenantForm from './CreateTenantForm';
import { useGetTenants } from '../../application/usecases/useGetTenants';
import { responseTenants } from '../../domain/getTenants.schema';
import DatalistHeader from '@/components/custom-components/data-list-header';

const AllTenants = () => {
  const { data: tenants } = useGetTenants();

  const [open, setOpen] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState<responseTenants | null>(
    null
  );

  return (
    <>
      <DatalistHeader
        title="Tenants"
        description="Track and manage tenants."
        handleAdd={() => {
          setSelectedTenant(null); // create mode
          setOpen(true);
        }}
      />

      <DataTable
        columns={tenantColumns({
          onEdit: (tenant) => {
            setSelectedTenant(tenant);
            setOpen(true);
          },
        })}
        data={tenants || []}
      />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-125">
          <DialogHeader>
            <DialogTitle className="text-primary">
              {selectedTenant ? 'Edit Tenant' : 'Create Tenant'}
            </DialogTitle>
            <DialogDescription>
              {selectedTenant
                ? 'Update tenant details'
                : 'Enter tenant details to create an account'}
            </DialogDescription>
          </DialogHeader>

          <CreateTenantForm
            defaultValues={selectedTenant}
            onSuccess={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllTenants;
