import { useState } from 'react';
import { updateCategorySchemaFormValues } from '../../domain/doctorCategory.schema';
import { useGetDoctorCategory } from '../../application/useGetDoctorCategory';

export const useDoctorCategoryHandle = () => {
  const [open, setOpen] = useState(false);
  const [editingHospital, setEditingHospital] =
    useState<updateCategorySchemaFormValues | null>(null);

  const { data: doctorCategory } = useGetDoctorCategory();

  const handleEdit = (Hospital: updateCategorySchemaFormValues) => {
    setEditingHospital(Hospital);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingHospital(null); // reset form for adding
    setOpen(true);
  };

  return {
    open,
    setOpen,
    editingHospital,
    setEditingHospital,
    handleEdit,
    handleAdd,
    doctorCategoryData: doctorCategory?.data,
  };
};
