import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addDoctorCategory } from '../infrastructure/addDoctorCategoryApi.repo';
import { categorySchemaFormValues } from '../domain/doctorCategory.schema';

export const useAddDoctorCategory = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: categorySchemaFormValues) => addDoctorCategory(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-category'] });
      toast.success('Data added successfully.');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
