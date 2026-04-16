import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { CountryFormData } from '../../domain/country.schema';
import { updateCountry } from '../../infrastructure/updateCountryApi.repo';

export const useUpdateCountry = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CountryFormData) => updateCountry(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-country'] });
      toast.success('Data added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
