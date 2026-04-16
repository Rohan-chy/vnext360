import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteDoctor } from '../../infrastructure/deleteDoctorApi.repo';
import { DeleteDoctor } from '../../domain/deleteDoctor.schema';
import { toast } from 'sonner';

export const useDeleteDoctor = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: DeleteDoctor) => deleteDoctor(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-doctors'] });
      toast.success('Doctor Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
