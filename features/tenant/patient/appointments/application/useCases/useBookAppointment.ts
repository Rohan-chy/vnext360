import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { bookAppointment } from '../../infrastructure/api/appointment.api';
import { patientAppointmentsQueryKeys } from '../queryKeys/patientAppointments.queryKeys';

export const useBookAppointment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => bookAppointment(data),
    onSuccess: () => {
      toast.success('Apppointment booked  Successfully');
      queryClient.invalidateQueries({
        queryKey: patientAppointmentsQueryKeys.patientAppointments,
      });
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
