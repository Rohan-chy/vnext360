import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { registerOrganization } from '../../infrastructure/registerApi.repo';
import { OrganizationRegistrationFormValues } from '../../domain/registerOrganization.schema';

export const useRegisterOrganization = () => {
  return useMutation({
    mutationFn: (data: OrganizationRegistrationFormValues) =>
      registerOrganization(data),
    onSuccess: () => {
      toast.success('Clinic Added Successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });
};
