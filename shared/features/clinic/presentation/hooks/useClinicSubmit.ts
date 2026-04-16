import { useCreateClinic } from '../../application/usecases/useCreateClinic';
import { usePatchClinic } from '../../application/usecases/usePatchClinic';
import { CreateClinicFormValues } from '../../domain/forms/createClinicForm';

type UseClinicSubmitProps = {
  onClose?: () => void;
};

export const useClinicSubmit = ({ onClose }: UseClinicSubmitProps) => {
  const { mutateAsync: createClinic, isPending: createPending } =
    useCreateClinic();
  const { mutateAsync: patchClinic, isPending: patchPending } =
    usePatchClinic();

  const onSubmit = async (values: CreateClinicFormValues) => {
    try {
      if (values.id) {
        await patchClinic(values);
      } else {
        await createClinic(values);
      }

      onClose?.();
    } catch (error) {
      console.error('Submit failed', error);
    }
  };

  return {
    onSubmit,
    isSubmitting: createPending || patchPending,
  };
};
