import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { uploadDoctorImageFormValues } from '../../domain/schema/uploadDoctorImage.schema';
import { uploadDoctorImage } from '../../infrastructure/uploadDoctorImageApi.repo';

export const useUploadDoctorImage = () => {
  return useMutation({
    mutationFn: (data: uploadDoctorImageFormValues) => uploadDoctorImage(data),
    onSuccess: () => {
      //   toast.success('Profile updated Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
