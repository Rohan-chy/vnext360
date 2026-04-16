import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteData } from '@/types/delete';
import { deleteDoctorSchedule } from '../../infrastructure/deleteSchedulesApi.repo';

export const useDeleteDoctorSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: deleteData) => deleteDoctorSchedule(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-DoctorOutgoingSchedule'],
      });
      toast.error('Schedule Deleted Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
