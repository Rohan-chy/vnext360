import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { DoctorProfessionalFormValues } from '../../domain/schema/doctorProfession.schema';
import { addUpdateDoctorProfession } from '../../infrastructure/addUpdateDoctorProfession';

export const useAddUpdateDoctorProfession = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: DoctorProfessionalFormValues) =>
      addUpdateDoctorProfession(data),
    onSuccess: () => {
      //   queryclient.invalidateQueries({ queryKey: ['get-doctor-profile'] });
      // toast.success('Data updated Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
