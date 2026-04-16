import { useGetDistrict } from '../usecases/useGetDistrict';
import { DistrictFormData } from '../../domain/district.schema';
import { useState } from 'react';

export const useAllDistrict = () => {
  const { data } = useGetDistrict();
  const District = data?.data;

  const [open, setOpen] = useState(false);
  const [editingDistrict, setEditingDistrict] =
    useState<DistrictFormData | null>(null);

  const handleEdit = (District: DistrictFormData) => {
    setEditingDistrict(District);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingDistrict(null); // reset form for adding
    setOpen(true);
  };

  return {
    District,
    open,
    setOpen,
    editingDistrict,
    setEditingDistrict,
    handleEdit,
    handleAdd,
  };
};
