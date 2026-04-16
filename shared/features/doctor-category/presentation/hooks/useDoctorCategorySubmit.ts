import { useAddDoctorCategory } from '../../application/useAddDoctorCategory';
import { useUpdateDoctorCategory } from '../../application/useUpdateDoctorCategory';
import {
  categorySchema,
  categorySchemaFormValues,
  updateCategorySchema,
  updateCategorySchemaFormValues,
} from '../../domain/doctorCategory.schema';

export const useDoctorCategorySubmit = (onClose?: () => void) => {
  const { mutateAsync: addDoctorCategory, isPending } = useAddDoctorCategory();
  const { mutateAsync: updateDoctorCategory, isPending: updatePending } =
    useUpdateDoctorCategory();

  const onSubmit = async (
    values: categorySchemaFormValues | updateCategorySchemaFormValues
  ) => {
    try {
      if ('id' in values && values.id) {
        // Validate against update schema
        const parsedValues = updateCategorySchema.parse(values);
        await updateDoctorCategory(parsedValues);
      } else {
        // Validate against create schema
        const parsedValues = categorySchema.parse(values);
        await addDoctorCategory(parsedValues);
      }

      onClose?.();
    } catch (error) {
      console.error('Failed to submit hospital request:', error);
    }
  };

  return {
    onSubmit,
    loading: isPending || updatePending,
  };
};
