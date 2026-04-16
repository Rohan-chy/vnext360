import { useGetDoctorCategory } from '../../../doctor-category/application/useGetDoctorCategory';
import { useAddDoctorSubCategory } from '../../application/useAddDoctorSubCategory';
import { useUpdateDoctorSubCategory } from '../../application/useUpdateDoctorSubCategory';
import {
  subcategorySchema,
  subcategorySchemaFormValues,
  updatesubCategorySchema,
  updatesubCategorySchemaFormValues,
} from '../../domain/doctorSubcategory.schema';

export const useDoctorSubCategorySubmit = (onClose?: () => void) => {
  const { data: doctorCategory } = useGetDoctorCategory();

  const { mutateAsync: addDoctorSubCategory, isPending } =
    useAddDoctorSubCategory();
  const { mutateAsync: updateDoctorSubCategory, isPending: updatePending } =
    useUpdateDoctorSubCategory();

  const onSubmit = async (
    values: subcategorySchemaFormValues | updatesubCategorySchemaFormValues
  ) => {
    try {
      if ('id' in values && values.id) {
        // Validate against update schema
        const parsedValues = updatesubCategorySchema.parse(values);
        await updateDoctorSubCategory(parsedValues);
      } else {
        // Validate against create schema
        const parsedValues = subcategorySchema.parse(values);
        await addDoctorSubCategory(parsedValues);
      }

      onClose?.();
    } catch (error) {
      console.error('Failed to submit hospital request:', error);
    }
  };

  return {
    onSubmit,
    loading: isPending || updatePending,
    doctorCategoryData: doctorCategory?.data,
  };
};
