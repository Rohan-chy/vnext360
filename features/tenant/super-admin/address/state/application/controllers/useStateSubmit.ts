import { useGetCountry } from '../../../country/application/usecases/useGetCountry';
import { stateFormData } from '../../domain/state.schema';
import { useCreateState } from '../usecases/useCreateState';
import { useUpdateState } from '../usecases/useUpdateState';

interface UseStateFormControllerProps {
  onSuccess?: () => void;
  form: any;
}

export const useStateSubmit = ({
  onSuccess,
  form,
}: UseStateFormControllerProps) => {
  const { mutate: createState, isPending: createPending } = useCreateState();
  const { mutate: updateState, isPending: updatePending } = useUpdateState();
  const { data: country } = useGetCountry();

  const submitState = (data: stateFormData) => {
    if (data.id) {
      // Update existing State
      updateState(data, { onSuccess });
    } else {
      // Create new State
      createState(data, { onSuccess });
    }
  };

  const handleClear = () => {
    form.reset();
  };

  return {
    submitState,
    loading: createPending || updatePending,
    handleClear,
    country,
  };
};
