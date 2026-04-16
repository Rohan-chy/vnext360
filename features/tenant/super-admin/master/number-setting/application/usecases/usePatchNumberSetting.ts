import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { patchNumberSetting } from '../../infrastructure/patchNumberSettingApi.repo';
import { CreateNumberSettingFormValues } from '../../domain/createNumberSetting.schema';

export const usePatchNumberSetting = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateNumberSettingFormValues) =>
      patchNumberSetting(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-NumberSettings'] });
      toast.success('NumberSetting Added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
