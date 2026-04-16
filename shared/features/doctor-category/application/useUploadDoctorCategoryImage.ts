import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { uploadDoctorCategoryImage } from '../infrastructure/uploadDoctorCategoryImageApi.repo';
import { uploadDoctorCategoryImageFormValues } from '../domain/uploadDoctorCategoryImage.schema';

export const useUploadDoctorCategoryImage = () => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: (data: uploadDoctorCategoryImageFormValues) =>
      uploadDoctorCategoryImage(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['get-doctor-category'] });
      toast.success('Image updated successfully.');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
