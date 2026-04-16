import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteDoctorCategory } from '../infrastructure/deleteDoctorCategoryApi.repo';

export const useDeleteDoctorCategory = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteDoctorCategory(id),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-category'] });
      toast.success('Data added successfully.');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
