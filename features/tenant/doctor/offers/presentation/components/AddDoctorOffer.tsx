'use client';

import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { FloatingLabelFormInputForClient } from '@/components/custom-components/floating-label-input-client';
import { ComboboxClient } from '@/components/custom-components/combobox-client';
import { useDoctorOfferForm } from '../../domain/useDoctorOfferForm';
import { DoctorOfferFormValues } from '../../domain/doctorOffer.schema';
import { FormCheckbox } from '@/components/extended/FormCheckbox';

interface DoctorOfferFormProps {
  initialValues?: DoctorOfferFormValues;
  onClose?: () => void;
}

export const DoctorOfferForm = ({
  initialValues,
  onClose,
}: DoctorOfferFormProps) => {
  const { form } = useDoctorOfferForm(initialValues);

  const onSubmit = (values: DoctorOfferFormValues) => {};

  return (
    <div className="flex justify-center ">
      <div className="w-full max-w-3xl rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
              <FloatingLabelFormInputForClient
                form={form}
                name="title"
                label="Offer Title"
                isRequired
              />

              <FloatingLabelFormInputForClient
                form={form}
                name="description"
                label="Description"
                isRequired
              />

              <FloatingLabelFormInputForClient
                form={form}
                name="discountPercent"
                label="Discount (%)"
                type="number"
                isRequired
              />

              <FloatingLabelFormInputForClient
                form={form}
                name="validFrom"
                label="Valid From"
                type="date"
                isRequired
              />

              <FloatingLabelFormInputForClient
                form={form}
                name="validTo"
                label="Valid To"
                type="date"
                isRequired
              />

              <ComboboxClient
                form={form}
                name="applicableServices"
                label="Applicable Services"
                items={[]}
                isRequired
              />

              <FormCheckbox form={form} name="isActive" label="Active" />
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <CustomButton type="submit" size="sm">
                {initialValues ? 'Update Offer' : 'Add Offer'}
              </CustomButton>
              <CustomButton
                type="button"
                variant="destructive"
                size="sm"
                onClick={() => form.reset(initialValues || undefined)}
              >
                Clear
              </CustomButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
