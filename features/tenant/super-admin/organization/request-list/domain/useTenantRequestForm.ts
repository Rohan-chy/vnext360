import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  OrganizationRegistrationFormValues,
  OrganizationRegistrationSchema,
} from './tenantRequest.schema';
import React from 'react';
import { TenantRequest } from './getTenantRequest.schema';

export const useOrganizationRegistrationForm = (
  defaultValues?: TenantRequest | null
) => {
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

  React.useEffect(() => {
    if (defaultValues) {
      form.reset(defaultValues);
    }
  }, [defaultValues]);

  return form;
};
