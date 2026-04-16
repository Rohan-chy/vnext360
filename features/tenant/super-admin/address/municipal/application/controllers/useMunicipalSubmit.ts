import { useGetDistrict } from '../../../district/application/usecases/useGetDistrict';
import { MunicipalFormData } from '../../domain/municipal.schema';
import { useCreateMunicipal } from '../usecases/useCreateMunicipal';
import { useUpdateMunicipal } from '../usecases/useUpdateMunicipal';

interface UseMunicipalFormControllerProps {
  onSuccess?: () => void;
  form: any;
}

export const useMunicipalSubmit = ({
  onSuccess,
  form,
}: UseMunicipalFormControllerProps) => {
  const { mutate: createMunicipal, isPending: createPending } =
    useCreateMunicipal();
  const { mutate: updateMunicipal, isPending: updatePending } =
    useUpdateMunicipal();

  const { data: district } = useGetDistrict() as {
    data?: { data: any[] };
  };

  const submitMunicipal = (data: MunicipalFormData) => {
    if (data.id) {
      // Update existing Municipal
      updateMunicipal(data, { onSuccess });
    } else {
      // Create new Municipal
      createMunicipal(data, { onSuccess });
    }
  };

  const handleClear = () => {
    form.reset();
  };

  return {
    submitMunicipal,
    loading: createPending || updatePending,
    handleClear,
    district,
  };
};
