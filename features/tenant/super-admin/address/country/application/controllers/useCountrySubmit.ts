import { CountryFormData } from '../../domain/country.schema';
import { useCreateCountry } from '../usecases/useCreateCountry';
import { useUpdateCountry } from '../usecases/useUpdateCountry';

interface UseCountryFormControllerProps {
  onSuccess?: () => void;
  form: any;
}

export const useCountrySubmit = ({
  onSuccess,
  form,
}: UseCountryFormControllerProps) => {
  const { mutate: createCountry, isPending: createPending } =
    useCreateCountry();
  const { mutate: updateCountry, isPending: updatePending } =
    useUpdateCountry();

  const submitCountry = (data: CountryFormData) => {
    if (data.id) {
      // Update existing country
      updateCountry(data, { onSuccess });
    } else {
      // Create new country
      createCountry(data, { onSuccess });
    }
  };

  const handleClear = () => {
    form.reset();
  };

  return {
    submitCountry,
    loading: createPending || updatePending,
    handleClear,
  };
};
