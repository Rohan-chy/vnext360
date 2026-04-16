import { useState } from 'react';
import { hsCodeResponseItem } from '../../domain/schema/hsCodeResponse.schema';
import { useGetHsCode } from '../../application/usecases/useGetHsCode';

export const useAllHsCodesHandler = () => {
  const { data } = useGetHsCode();
  const hsCodeData = data?.data;

  const [open, setOpen] = useState(false);
  const [editingHscode, setEditingHscode] = useState<hsCodeResponseItem | null>(
    null
  );

  const handleEdit = (Hscode: hsCodeResponseItem) => {
    setEditingHscode(Hscode);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingHscode(null); // reset form for adding
    setOpen(true);
  };

  return {
    open,
    setOpen,
    editingHscode,
    handleEdit,
    handleAdd,
    hsCodeData,
  };
};
