'use client';

import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { useOrganizationRegistrationForm } from '../../domain/useTenantRequestForm';
import { FormCheckbox } from '@/components/extended/FormCheckbox';
import { TenantRequest } from '../../domain/getTenantRequest.schema';
import { useRequestHandle } from '../hooks/useRequestHandle';

type CreateOrganizationFormProps = {
  defaultValues?: TenantRequest | null;
  onSuccess?: () => void;
};

export default function CreateOrganizationForm({
  defaultValues,
  onSuccess,
}: CreateOrganizationFormProps) {
  const form = useOrganizationRegistrationForm(defaultValues);

  const { onSubmit, loading } = useRequestHandle({ onSuccess });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FloatingLabelFormInput
          form={form}
          name="companyName"
          label="Organization Name"
        />

        <FloatingLabelFormInput form={form} name="address" label="Address" />

        <FloatingLabelFormInput
          form={form}
          name="email"
          type="email"
          label="Email"
        />

        <FloatingLabelFormInput
          form={form}
          name="phoneNumber"
          label="Phone Number"
        />

        <FloatingLabelFormInput form={form} name="name" label="Username" />

        {/* <FloatingLabelFormInput
              form={form}
              name="password"
              label="Password"
            /> */}

        <FormCheckbox form={form} name="isApproved" label="Approved" />

        <div className="flex justify-end gap-2">
          {/* SUBMIT BUTTON */}
          <CustomButton type="submit" disabled={loading} size={'sm'}>
            Save
          </CustomButton>
          {/* CLEAR BUTTON */}
          <CustomButton
            type="button"
            variant={'outline'}
            disabled={loading}
            size={'sm'}
            onClick={() => form.reset(defaultValues || undefined)}
          >
            Clear
          </CustomButton>
        </div>
      </form>
    </Form>
  );
}
