'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import DatalistHeader from '@/components/custom-components/data-list-header';
import DataTable from '@/components/custom-components/table/data-table';
import { doctoryCategoryColumns } from '../doctorCategoryColumns';
import { useDoctorCategoryHandle } from '../hooks/useDoctoryCategoryHandle';
import DoctorCategoryForm from './DoctorCategoryForm';

const DoctoryCategory = () => {
  const {
    open,
    setOpen,
    editingHospital,
    handleEdit,
    handleAdd,
    doctorCategoryData,
  } = useDoctorCategoryHandle();

  return (
    <>
      <DatalistHeader
        title="Doctor Speciality"
        description="Manage and organize doctor specialities in the system"
        handleAdd={handleAdd}
      />

      <DataTable
        columns={doctoryCategoryColumns(handleEdit)}
        data={doctorCategoryData || []}
      />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingHospital
                ? 'Update Doctor Speciality'
                : 'Doctor Speciality'}
            </DialogTitle>
            <DialogDescription>
              {editingHospital
                ? 'Update Doctor Speciality information'
                : 'Enter Doctor Speciality information '}
            </DialogDescription>
          </DialogHeader>

          <DoctorCategoryForm
            initialValues={editingHospital || undefined}
            onClose={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DoctoryCategory;
