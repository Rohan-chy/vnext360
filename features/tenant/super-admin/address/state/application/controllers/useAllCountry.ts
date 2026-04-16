import { useState } from 'react';
import { useGetState } from '../usecases/useGetState';
import { stateFormData } from '../../domain/state.schema';

export const useAllState = () => {
  const { data } = useGetState() as { data?: { data: stateFormData[] } };
  const State = data?.data;

  const [open, setOpen] = useState(false);
  const [editingState, setEditingState] = useState<stateFormData | null>(null);

  const handleEdit = (State: stateFormData) => {
    setEditingState(State);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingState(null); // reset form for adding
    setOpen(true);
  };

  return {
    State,
    open,
    setOpen,
    editingState,
    setEditingState,
    handleEdit,
    handleAdd,
  };
};
