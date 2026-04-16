import { useState } from 'react';
import { CountryFormData } from '../../domain/country.schema';
import { useGetCountry } from '../usecases/useGetCountry';

export const useAllCountry = () => {
  const { data } = useGetCountry();
  const Country = data?.data;

  const [open, setOpen] = useState(false);
  const [editingCountry, setEditingCountry] = useState<CountryFormData | null>(
    null
  );

  const handleEdit = (Country: CountryFormData) => {
    setEditingCountry(Country);
    setOpen(true);
  };

  const handleAdd = () => {
    setEditingCountry(null); // reset form for adding
    setOpen(true);
  };

  return {
    Country,
    open,
    setOpen,
    editingCountry,
    setEditingCountry,
    handleEdit,
    handleAdd,
  };
};
