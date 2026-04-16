import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { CountryFormData } from '../../domain/country.schema';
import { createCountry } from '../../infrastructure/createCountryApi.repo';

export const useCreateCountry = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CountryFormData) => createCountry(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-country'] });
      toast.success('Data added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
