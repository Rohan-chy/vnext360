import { useState } from 'react';
import { outgoingRequestSchemaFormValues } from '../../domain/outgoingRequest.schema';

export const useOutgoingRequestHandle = () => {
  const [open, setOpen] = useState(false);
  const [editingHospital, setEditingHospital] =
    useState<outgoingRequestSchemaFormValues | null>(null);

  const handleEdit = (Hospital: outgoingRequestSchemaFormValues) => {
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
  };
};
