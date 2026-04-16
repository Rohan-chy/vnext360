'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { Form } from '@/components/ui/form';
import { useCreateTenant } from '../../application/usecases/useCreateTenant';
import {
  TenantFormValues,
  tenantSchema,
} from '../../domain/createTenant.schema';
import { getTenants } from '../../domain/getTenants.schema';
import React from 'react';
import { CustomButton } from '@/components/extended/extended-button';

type CreateTenantFormProps = {
  defaultValues?: getTenants | null;
  onSuccess?: () => void;
};

export default function CreateTenantForm({
  defaultValues,
  onSuccess,
}: CreateTenantFormProps) {
  const form = useForm({
    resolver: zodResolver(tenantSchema),
    defaultValues: {
      id: '',
      name: '',
      adminEmail: '',
      adminPassword: '',
      issuer: '',
    },
  });

  const { reset } = form;

  React.useEffect(() => {
    if (defaultValues) {
      reset({
        id: defaultValues.id,
        name: defaultValues.name,
        adminEmail: defaultValues.adminEmail,
        adminPassword: '', // 🔐 never prefill password
        issuer: defaultValues.issuer,
      });
    } else {
      reset({
        id: '',
        name: '',
        adminEmail: '',
        adminPassword: '',
        issuer: '',
      });
    }
  }, [defaultValues, reset]);

  const { mutate, isPending } = useCreateTenant();

  const onSubmit = (values: TenantFormValues) => {
    mutate(values, {
      onSuccess: () => onSuccess?.(),
    });
  };

  return (
    <div className="flex justify-center px-4 ">
      <div className="w-full max-w-lg rounded-xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Tenant Info */}
            <FloatingLabelFormInput form={form} name="id" label="Tenant ID" />

            <FloatingLabelFormInput
              form={form}
              name="name"
              label="Tenant Name"
            />

            {/* Admin Account */}
            <FloatingLabelFormInput
              form={form}
              name="adminEmail"
              label="Email"
              type="email"
            />

            <FloatingLabelFormInput
              form={form}
              name="adminPassword"
              label="Password"
              type="password"
            />

            {/* Issuer */}
            <FloatingLabelFormInput form={form} name="issuer" label="Issuer" />

            <div className="flex justify-end gap-2">
              {/* SUBMIT BUTTON */}
              <CustomButton type="submit" disabled={isPending} size={'sm'}>
                Add
              </CustomButton>
              {/* CLEAR BUTTON */}
              <CustomButton
                type="button"
                variant={'destructive'}
                disabled={isPending}
                size={'sm'}
                onClick={() => form.reset(defaultValues || undefined)}
              >
                Clear
              </CustomButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
