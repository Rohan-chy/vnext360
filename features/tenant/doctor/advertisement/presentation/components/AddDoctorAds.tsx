'use client';

import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { FloatingLabelFormInputForClient } from '@/components/custom-components/floating-label-input-client';
import { FormCheckbox } from '@/components/extended/FormCheckbox';
import { DoctorAdvertisementFormValues } from '../../domain/doctorAdvertisement.schema';
import { useDoctorAdvertisementForm } from '../../domain/useDoctorAdvertisementForm';
import { FormTextArea } from '@/components/extended/form-textarea';

interface DoctorOfferFormProps {
  initialValues?: DoctorAdvertisementFormValues;
  onClose?: () => void;
}

export const DoctorAdsForm = ({
  initialValues,
  onClose,
}: DoctorOfferFormProps) => {
  const { form } = useDoctorAdvertisementForm(initialValues);

  const onSubmit = (values: DoctorAdvertisementFormValues) => {};

  return (
    <div className="flex justify-center ">
      <div className="w-full max-w-3xl rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
              <div className="col-span-full">
                <FloatingLabelFormInputForClient
                  form={form}
                  name="title"
                  label="Advertisement Title"
                  isRequired
                />
              </div>

              <div className="col-span-full">
                <FormTextArea
                  form={form}
                  name="description"
                  label="Description"
                />
              </div>

              <div className="col-span-full">
                <FloatingLabelFormInputForClient
                  form={form}
                  name="mediaUrl"
                  label="Media URL"
                  type="url"
                />
              </div>

              <FloatingLabelFormInputForClient
                form={form}
                name="startDate"
                label="Start Date"
                type="date"
                isRequired
              />

              <FloatingLabelFormInputForClient
                form={form}
                name="endDate"
                label="End Date"
                type="date"
                isRequired
              />

              <FormCheckbox form={form} name="isActive" label="Active" />
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <CustomButton type="submit" size="sm">
                {initialValues ? 'Update Advertisement' : 'Add Advertisement'}
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
