import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteDoctorSubCategory } from '../infrastructure/deleteDoctorSubCategoryApi.repo';

export const useDeleteDoctorSubCategory = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteDoctorSubCategory(id),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-subcategory'] });
      toast.success('Data added successfully.');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
