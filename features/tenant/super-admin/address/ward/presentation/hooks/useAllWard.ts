import { useGetWard } from '../../application/usecases/useGetWard';
import { WardFormData } from '../../domain/ward.schema';
import { useState } from 'react';

export const useAllWard = () => {
  const { data } = useGetWard();
  const Ward = data?.data;

  const [open, setOpen] = useState(false);
  const [editingWard, setEditingWard] = useState<WardFormData | null>(null);

  const handleEdit = (Ward: WardFormData) => {
    setEditingWard(Ward);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingWard(null); // reset form for adding
    setOpen(true);
  };

  return {
    Ward,
    open,
    setOpen,
    editingWard,
    setEditingWard,
    handleEdit,
    handleAdd,
  };
};
