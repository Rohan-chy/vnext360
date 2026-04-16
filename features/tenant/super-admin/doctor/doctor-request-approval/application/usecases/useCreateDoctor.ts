import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateDoctorPayload } from '../../domain/createDoctor.schema';
import { createDoctor } from '../../infrastructure/createDoctorApi.repository';
import { toast } from 'sonner';

export const useCreateDoctor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateDoctorPayload) => createDoctor(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-doctors'] });
      toast.success('Doctor Added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
