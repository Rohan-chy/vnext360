import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { CreateNumberSettingFormValues } from '../../domain/createNumberSetting.schema';
import { createNumberSetting } from '../../infrastructure/createNumberSetting.repo';

export const useCreateNumberSetting = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateNumberSettingFormValues) =>
      createNumberSetting(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-NumberSettings'] });
      toast.success('NumberSetting Added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
