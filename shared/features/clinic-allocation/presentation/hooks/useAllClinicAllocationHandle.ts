import { useState } from 'react';
import { CreateClinicAllocationFormValues } from '../../domain/createClinicAllocation.schema';

export const useAllClinicAllocationHandle = () => {
  const [open, setOpen] = useState(false);
  const [editingClinic, setEditingClinic] =
    useState<CreateClinicAllocationFormValues | null>(null);

  const handleEdit = (Clinic: CreateClinicAllocationFormValues) => {
    setEditingClinic(Clinic);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingClinic(null); // reset form for adding
    setOpen(true);
  };

  return {
    open,
    setOpen,
    editingClinic,
    handleEdit,
    handleAdd,
  };
};
