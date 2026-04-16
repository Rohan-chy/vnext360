import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { updateCategorySchemaFormValues } from '../domain/doctorCategory.schema';
import { updateDoctorCategory } from '../infrastructure/updateDoctoryCategoryApi.repo';

export const useUpdateDoctorCategory = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: updateCategorySchemaFormValues) =>
      updateDoctorCategory(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-category'] });
      toast.success('Data updated successfully.');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
