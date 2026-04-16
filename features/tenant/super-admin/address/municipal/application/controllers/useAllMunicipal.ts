import { useGetMunicipal } from '../usecases/useGetMunicipal';
import { MunicipalFormData } from '../../domain/municipal.schema';
import { useState } from 'react';

export const useAllMunicipal = () => {
  const { data } = useGetMunicipal();
  const Municipal = data?.data;

  const [open, setOpen] = useState(false);
  const [editingMunicipal, setEditingMunicipal] =
    useState<MunicipalFormData | null>(null);

  const handleEdit = (Municipal: MunicipalFormData) => {
    setEditingMunicipal(Municipal);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingMunicipal(null); // reset form for adding
    setOpen(true);
  };

  return {
    Municipal,
    open,
    setOpen,
    editingMunicipal,
    setEditingMunicipal,
    handleEdit,
    handleAdd,
  };
};
