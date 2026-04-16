import { useState } from 'react';
import { updatesubCategorySchemaFormValues } from '../../domain/doctorSubcategory.schema';
import { useGetDoctorSubcategory } from '../../application/useGetDoctorSubcategory';

export const useDoctorSubCategoryHandle = () => {
  const [open, setOpen] = useState(false);
  const [editingHospital, setEditingHospital] =
    useState<updatesubCategorySchemaFormValues | null>(null);

  const { data: doctorsubCategory } = useGetDoctorSubcategory();

  const handleEdit = (Hospital: updatesubCategorySchemaFormValues) => {
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
    doctorsubCategoryData: doctorsubCategory?.data,
  };
};
