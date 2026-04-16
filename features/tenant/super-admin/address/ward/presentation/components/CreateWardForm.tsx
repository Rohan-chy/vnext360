'use client';

import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { FormCheckbox } from '@/components/extended/FormCheckbox';
import { WardFormData, useWardForm } from '../../domain/ward.schema';
import { Combobox } from '@/components/custom-components/combobox';
import { addressOptions } from '@/shared/optionsData/addressOptions';
import { useWardSubmit } from '../hooks/useWardSubmit';

interface WardFormProps {
  initialValues?: WardFormData;
  onClose?: () => void;
}

export default function CreateWardForm({
  initialValues,
  onClose,
}: WardFormProps) {
  const form = useWardForm(initialValues);

  const { submitWard, loading, handleClear, municipal } = useWardSubmit({
    onSuccess: onClose,
    form,
  });

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitWard)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <Combobox
                items={addressOptions(municipal?.data) || []}
                form={form}
                name="municipalityId"
                label="Municipality"
              />
              <FloatingLabelFormInput
                form={form}
                type="number"
                name="wardNumber"
                label="Ward No."
              />

              <FormCheckbox form={form} name="isActive" label="Active" />
            </div>

            <div className="flex justify-end gap-2">
              {/* SUBMIT BUTTON */}
              <CustomButton type="submit" size="sm" disabled={loading}>
                {initialValues ? 'Update' : 'Add'}
              </CustomButton>

              {/* CLEAR BUTTON */}
              <CustomButton
                type="button"
                variant="destructive"
                size="sm"
                disabled={loading}
                onClick={handleClear}
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
