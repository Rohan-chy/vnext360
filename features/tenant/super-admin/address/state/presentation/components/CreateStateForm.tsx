'use client';

import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { useStateSubmit } from '../../application/controllers/useStateSubmit';
import { FormCheckbox } from '@/components/extended/FormCheckbox';
import { stateFormData, usestateForm } from '../../domain/state.schema';
import { Combobox } from '@/components/custom-components/combobox';
import { addressOptions } from '@/shared/optionsData/addressOptions';

interface StateFormProps {
  initialValues?: stateFormData;
  onClose?: () => void;
}

export default function CreateStateForm({
  initialValues,
  onClose,
}: StateFormProps) {
  const form = usestateForm(initialValues);

  const { submitState, loading, handleClear, country } = useStateSubmit({
    onSuccess: onClose,
    form,
  });

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitState)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <Combobox
                items={addressOptions(country?.data) || []}
                form={form}
                name="countryId"
                label="Country"
              />

              <FloatingLabelFormInput
                form={form}
                type="text"
                name="name"
                label="State Name"
              />

              <FloatingLabelFormInput
                form={form}
                type="number"
                name="sortingId"
                label="Sorting ID"
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
