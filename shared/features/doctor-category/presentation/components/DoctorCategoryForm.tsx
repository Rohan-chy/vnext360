'use client';

import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { FormTextArea } from '@/components/extended/form-textarea';
import { useDoctorCategoryForm } from '../../domain/useDoctorCategoryForm';
import { useDoctorCategorySubmit } from '../hooks/useDoctorCategorySubmit';

const DoctorCategoryForm = ({ initialValues, onClose }: any) => {
  const form = useDoctorCategoryForm(initialValues);

  const { onSubmit, loading } = useDoctorCategorySubmit(onClose);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 space-y-6">
          {/* Category Name */}
          <FloatingLabelFormInput
            form={form}
            name="categoryName"
            label="Speciality"
            isRequired
          />

          {/* Description */}
          <div className="col-span-full">
            <FormTextArea form={form} name="description" label="Description" />
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

export default DoctorCategoryForm;
