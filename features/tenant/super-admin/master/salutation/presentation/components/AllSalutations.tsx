'use client';
import DataTable from '@/components/custom-components/table/data-table';
import { useGetSalutation } from '../../application/usecases/useGetSalutation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';
import DatalistHeader from '@/components/custom-components/data-list-header';
import { SalutationFormValues } from '../../domain/createSalutation.schema';
import { salutationColumns } from '../columns/salutationColumns';
import CreateSalutationForm from './CreateSalutationForm';

const AllSalutations = () => {
  const { data } = useGetSalutation();
  const Clinics = data?.data;

  const [open, setOpen] = useState(false);
  const [editingClinic, setEditingClinic] =
    useState<SalutationFormValues | null>(null);

  const handleEdit = (Clinic: SalutationFormValues) => {
    setEditingClinic(Clinic);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingClinic(null); // reset form for adding
    setOpen(true);
  };

  return (
    <>
      <DatalistHeader
        title="Salutation"
        description="Manage and maintain salutations used for addressing individuals in the system."
        handleAdd={handleAdd}
      />

      <DataTable columns={salutationColumns(handleEdit)} data={Clinics || []} />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingClinic ? 'Edit Salutation' : 'Salutation'}
            </DialogTitle>
            <DialogDescription>
              {editingClinic
                ? 'Update Salutation details'
                : 'Enter Salutation details '}
            </DialogDescription>
          </DialogHeader>

          <CreateSalutationForm
            initialValues={editingClinic || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllSalutations;
