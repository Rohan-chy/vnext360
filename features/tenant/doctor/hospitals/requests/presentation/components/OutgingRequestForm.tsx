'use client';

import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { Combobox } from '@/components/custom-components/combobox';
import { FormTextArea } from '@/components/extended/form-textarea';
import { useOutgoingRequestForm } from '../../domain/useOutgoingRequestForm';
import { useRequestSubmit } from '../hooks/useRequestSubmit';
import { convertClinicsToItems } from '@/lib/clinicOptions';

const OutgoingRequestForm = ({ initialValues, onClose }: any) => {
  const form = useOutgoingRequestForm(initialValues);

  const { clinicData, onSubmit, loading } = useRequestSubmit(onClose);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 items-center">
          <Combobox
            items={convertClinicsToItems(clinicData) || []}
            form={form}
            name="clinicId"
            label="Clinic Name"
            isRequired
          />

          <FloatingLabelFormInput
            form={form}
            name="designation"
            label="Designation"
            isRequired
          />

          <FloatingLabelFormInput
            form={form}
            name="joiningDate"
            label="Join Date"
            type="date"
            isRequired
          />

          <div className="col-span-full">
            <FormTextArea form={form} name="remarks" label="Remarks" />
          </div>
        </div>

        <div className="flex justify-end gap-2">
          {/* SUBMIT */}
          <CustomButton type="submit" disabled={loading} size="sm">
            {initialValues ? 'Update' : 'Save'}
          </CustomButton>

          {/* CLEAR */}
          <CustomButton
            type="button"
            variant="outline"
            disabled={loading}
            size="sm"
            onClick={() => form.reset(initialValues || undefined)}
          >
            Clear
          </CustomButton>
        </div>
      </form>
    </Form>
  );
};

export default OutgoingRequestForm;
