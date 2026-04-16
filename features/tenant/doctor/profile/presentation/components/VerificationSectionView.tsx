'use client';

import { Combobox } from '@/components/custom-components/combobox';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { FormTextArea } from '@/components/extended/form-textarea';
import { CustomButton } from '@/components/extended/extended-button';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

interface Props {
  form: any;
  onSubmit: () => void;
  categoryOptions: any[];
  subcategoryOptions: any[];
  isPending: boolean;
  prevTab?: string;
  onBack?: () => void;
}

const VerificationSectionView = ({
  form,
  onSubmit,
  categoryOptions,
  subcategoryOptions,
  isPending,
  prevTab,
  onBack,
}: Props) => {
  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="space-y-6"
      >
        {/*  SECTION HEADER */}
        <div className="rounded-xl overflow-hidden shadow-sm border">
          <div className="px-5 py-2 font-semibold text-lg text-primary">
            Professional Information
          </div>

          {/* ⚪ CONTENT */}
          <div className="p-6 space-y-8">
            {/* 🔹 Specialization */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Combobox
                  items={categoryOptions}
                  form={form}
                  name="doctorCategoryId"
                  label="Speciality"
                />

                <Combobox
                  items={subcategoryOptions}
                  form={form}
                  name="doctorSubCategoryId"
                  label="Sub-speciality"
                />
              </div>
            </div>

            {/* 🔹 Registration */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FloatingLabelFormInput
                  form={form}
                  name="registrationNumber"
                  label="NMC No."
                />
              </div>
            </div>

            {/* 🔹 Bio */}
            <div className="space-y-4">
              {/* <h3 className="text-sm font-semibold text-[#224994]">
                Profile Summary
              </h3> */}

              <FormTextArea
                form={form}
                name="briefBio"
                label="Brief Bio"
                placeholder="Write a short professional summary about yourself..."
              />
            </div>
          </div>
        </div>

        {/* ACTION BAR */}
        <div className="sticky bottom-0 p-4 flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            disabled={!prevTab}
            size="sm"
          >
            Back
          </Button>

          <CustomButton type="submit" disabled={isPending} size="sm">
            {isPending ? 'Saving...' : 'Save & Continue'}
          </CustomButton>
        </div>
      </form>
    </Form>
  );
};

export default VerificationSectionView;
