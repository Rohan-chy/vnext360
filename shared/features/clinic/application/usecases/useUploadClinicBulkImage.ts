import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { uploadClinicBulkImageFormValues } from '../../domain/forms/uploadClinicBulkImageForm';
import { uploadClinicBulkImage } from '../../infrastructure/uploadClinicBulkImageApi.repo';

export const useUploadClinicBulkImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: uploadClinicBulkImageFormValues) =>
      uploadClinicBulkImage(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-profile-organization'] });
      toast.success('File uploaded Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
