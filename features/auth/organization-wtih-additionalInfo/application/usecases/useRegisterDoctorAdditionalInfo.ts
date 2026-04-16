import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { registerAdditionalInfoOrganization } from '../../infrastructure/registerAdditionalInfoApi.repo';
import { OrganizationRegistrationFormValues } from '../../domain/registerOrganizationAdditionalInfo.schema';

export const useRegisterOrganizationAdditionalInfo = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: OrganizationRegistrationFormValues) =>
      registerAdditionalInfoOrganization(data),
    onSuccess: () => {
      toast.success('Requested Successfully. Will be registered soon.');
      router.replace('/organization/login');
    },
    onError: () => {
      toast.error('Registration failed. Please try again later.');
    },
  });
};
