import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addDoctorSubCategory } from '../infrastructure/addDoctorSubCategoryApi.repo';
import { subcategorySchemaFormValues } from '../domain/doctorSubcategory.schema';

export const useAddDoctorSubCategory = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: subcategorySchemaFormValues) =>
      addDoctorSubCategory(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-subcategory'] });
      toast.success('Data added successfully.');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
