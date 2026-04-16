import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { cancelAppointment } from '../infrastructure/cancelAppointmentApi.repo';

export const useCancelAppointment = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => cancelAppointment(id),
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey: ['get-DoctorAppointment'],
      });
      toast.success('Appointment Cancelled Successfully.');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
