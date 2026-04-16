'use client';
import DataTable from '@/components/custom-components/table/data-table';
import { useGetClinics } from '../../application/usecases/useGetClinics';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import CreateClinicForm from './CreateClinicForm';
import { useState } from 'react';
import { clinicColumns } from '../columns/clinicColumns';
import { ClinicResponse } from '../../domain/schemas/getClinic.schema';
import DatalistHeader from '@/components/custom-components/data-list-header';

const AllClinics = () => {
  const { data } = useGetClinics();
  const Clinics = data?.data;

  const [open, setOpen] = useState(false);
  const [editingClinic, setEditingClinic] = useState<ClinicResponse | null>(
    null
  );

  const handleEdit = (Clinic: ClinicResponse) => {
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
        title="Clinics"
        description="Track and manage clinics."
        handleAdd={handleAdd}
      />

      <DataTable columns={clinicColumns(handleEdit)} data={Clinics || []} />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingClinic ? 'Edit Clinic' : 'Create Clinic'}
            </DialogTitle>
            <DialogDescription>
              {editingClinic
                ? 'Update Clinic details'
                : 'Enter Clinic details to create an account'}
            </DialogDescription>
          </DialogHeader>

          <CreateClinicForm
            initialValues={editingClinic || null}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllClinics;
