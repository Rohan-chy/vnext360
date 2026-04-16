'use client';
import DataTable from '@/components/custom-components/table/data-table';
import { useGetDoctors } from '../../application/usecases/useGetDoctors';
import { doctorColumns } from '../columns/doctorColumns';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import CreateDoctorForm from './CreateDoctorForm';
import { useState } from 'react';
import { DoctorsResponse } from '../../domain/getDoctors.schema';
import { mapDoctorToFormValues } from '../../application/services/mapDoctorToForm';
import DatalistHeader from '@/components/custom-components/data-list-header';

const AllDoctors = () => {
  const { data } = useGetDoctors();
  const doctors: DoctorsResponse[] = data?.data || [];

  const [open, setOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState<DoctorsResponse | null>(
    null
  );

  const handleEdit = (doctor: DoctorsResponse) => {
    setEditingDoctor(doctor);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingDoctor(null); // reset form for adding
    setOpen(true);
  };

  return (
    <>
      <DatalistHeader title="Doctor Request" handleAdd={handleAdd} />

      <DataTable columns={doctorColumns(handleEdit)} data={doctors || []} />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-blue-500">
              {editingDoctor ? 'Edit Doctor Request' : 'Create Doctor Request'}
            </DialogTitle>
            <DialogDescription>
              {editingDoctor
                ? 'Update doctor details'
                : 'Enter doctor details to create an account'}
            </DialogDescription>
          </DialogHeader>

          <CreateDoctorForm
            initialValues={
              editingDoctor ? mapDoctorToFormValues(editingDoctor) : undefined
            }
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AllDoctors;
