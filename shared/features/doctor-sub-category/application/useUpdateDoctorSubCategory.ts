import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateDoctorSubCategory } from '../infrastructure/updateDoctoryaSubCategoryApi.repo';
import { updatesubCategorySchemaFormValues } from '../domain/doctorSubcategory.schema';

export const useUpdateDoctorSubCategory = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: updatesubCategorySchemaFormValues) =>
      updateDoctorSubCategory(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-subcategory'] });
      toast.success('Data updated successfully.');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
