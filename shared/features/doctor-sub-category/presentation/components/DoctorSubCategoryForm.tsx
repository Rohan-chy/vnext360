'use client';

import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { FormTextArea } from '@/components/extended/form-textarea';
import { useDoctorSubCategorySubmit } from '../hooks/useDoctorSubCategorySubmit';
import { useDoctorSubcategoryForm } from '../../domain/useDoctorSubCategoryForm';
import { Combobox } from '@/components/custom-components/combobox';
import { doctorCategoryOptions } from '@/shared/optionsData/doctorCategoryOptions';

const DoctorSubCategoryForm = ({ initialValues, onClose }: any) => {
  const form = useDoctorSubcategoryForm(initialValues);

  const { onSubmit, loading, doctorCategoryData } =
    useDoctorSubCategorySubmit(onClose);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
              {/* Category Name */}
              <FloatingLabelFormInput
                form={form}
                name="subCategoryName"
                label="Sub-Speciality"
                isRequired
              />
              <Combobox
                items={doctorCategoryOptions(doctorCategoryData) || []}
                form={form}
                name="doctorCategoryId"
                label="Speciality"
                isRequired
              />

              {/* Description */}
              <div className="col-span-full">
                <FormTextArea
                  form={form}
                  name="description"
                  label="Description"
                />
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
      </div>
    </div>
  );
};

export default DoctorSubCategoryForm;
