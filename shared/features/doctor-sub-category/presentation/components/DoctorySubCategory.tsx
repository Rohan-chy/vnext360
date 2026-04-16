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
import DoctorCategoryForm from './DoctorSubCategoryForm';
import { useDoctorSubCategoryHandle } from '../hooks/useDoctorySubCategoryHandle';
import { doctorSubCategoryColumns } from '../doctorSubCategoryColumns';

const DoctorySubCategory = () => {
  const {
    open,
    setOpen,
    editingHospital,
    handleEdit,
    handleAdd,
    doctorsubCategoryData,
  } = useDoctorSubCategoryHandle();

  return (
    <>
      <DatalistHeader
        title="Doctor Sub-Speciality"
        description="Manage doctor sub-speciality"
        handleAdd={handleAdd}
      />

      <DataTable
        columns={doctorSubCategoryColumns(handleEdit)}
        data={doctorsubCategoryData || []}
      />

      {/* Dialog controlled from parent */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-primary">
              {editingHospital ? 'Edit Sub-Speciality' : 'Sub-Speciality'}
            </DialogTitle>
            <DialogDescription>
              {editingHospital
                ? 'Update Sub-Speciality details'
                : 'Enter Sub-Speciality details '}
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

export default DoctorySubCategory;
