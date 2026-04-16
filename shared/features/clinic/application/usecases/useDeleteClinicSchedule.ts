import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteClinicSchedule } from '../../infrastructure/deleteClinicScheduleApi.repo';

export const useDeleteClinicSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteClinicSchedule(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-clinicbyId'] });
      toast.error('Schedule Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
