import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { uploadClinicImage } from '../../infrastructure/uploadClinicImageApi.repo';
import { updateClinicImageFormValues } from '../../domain/forms/updateClinicImageForm';

export const useUploadClinicImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: updateClinicImageFormValues) => uploadClinicImage(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-profile-organization'] });
      toast.success('Profile updated Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
