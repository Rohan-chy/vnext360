import { useGetState } from '../../../state/application/usecases/useGetState';
import { DistrictFormData } from '../../domain/district.schema';
import { useCreateDistrict } from '../usecases/useCreateDistrict';
import { useUpdateDistrict } from '../usecases/useUpdateDistrict';

interface UseDistrictFormControllerProps {
  onSuccess?: () => void;
  form: any;
}

export const useDistrictSubmit = ({
  onSuccess,
  form,
}: UseDistrictFormControllerProps) => {
  const { mutate: createDistrict, isPending: createPending } =
    useCreateDistrict();
  const { mutate: updateDistrict, isPending: updatePending } =
    useUpdateDistrict();
  const { data: state } = useGetState();

  const submitDistrict = (data: DistrictFormData) => {
    if (data.id) {
      // Update existing District
      updateDistrict(data, { onSuccess });
    } else {
      // Create new District
      createDistrict(data, { onSuccess });
    }
  };

  const handleClear = () => {
    form.reset();
  };

  return {
    submitDistrict,
    loading: createPending || updatePending,
    handleClear,
    state,
  };
};
