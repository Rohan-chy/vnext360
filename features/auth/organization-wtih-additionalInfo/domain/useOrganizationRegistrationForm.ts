import { useForm } from 'react-hook-form';
import {
  OrganizationRegistrationFormValues,
  OrganizationRegistrationSchema,
} from './registerOrganizationAdditionalInfo.schema';
import { zodResolver } from '@hookform/resolvers/zod';

export const useOrganizationRegistrationForm = () => {
  const form = useForm<OrganizationRegistrationFormValues>({
    resolver: zodResolver(OrganizationRegistrationSchema),
    defaultValues: {
      name: '',
      companyName: '',
      email: '',
      phoneNumber: '',
      address: '',
      password: '',
    },
    mode: 'onChange', // validate as user types
  });

  return form;
};
