import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { uploadPatientImage } from '../../infrastructure/api/patient.api';
import { PatientProfileImage } from '../../domain/entities/patientProfileImage.entity';

export const useUploadPatientImage = () => {
  return useMutation({
    mutationFn: (data: PatientProfileImage) => uploadPatientImage(data),
    onSuccess: () => {
      toast.success('Image saved successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
