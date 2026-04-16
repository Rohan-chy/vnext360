'use client';

import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { Combobox } from '@/components/custom-components/combobox';
import { NepaliDatePickerField } from '@/components/custom-components/nepali-date-picker-field';
import { genderOptions } from '@/lib/genderItems';
import { salutationOptions } from '@/shared/optionsData/salutationOptions';
import { Button } from '@/components/ui/button';
import { FormSectionCard } from './FormSectionCard';
import ProfileImageUpload from '@/shared/components/ProfileImageUpload';

interface Props {
  form: any;
  onSubmit: (data: any) => void;
  doctorProfileData: any;
  salutations: any;
  updatePending: boolean;
  prevTab?: string;
  onBack?: () => void;
}

const ProfileinfoSeparate = ({
  form,
  onSubmit,
  doctorProfileData,
  salutations,
  updatePending,
  prevTab,
  onBack,
}: Props) => {
  return (
    <main>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border bg-white shadow-sm p-4 rounded-md space-y-6 mt-4"
        >
          <FormSectionCard title="Basic Information">
            <div className="flex flex-col lg:flex-row gap-8">
              <ProfileImageUpload
                form={form}
                name="image"
                apiImage={{
                  baseAddress: doctorProfileData?.imageBaseAddress,
                  path: doctorProfileData?.imagePath,
                }}
              />

              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* fields unchanged */}
                <div className="flex gap-3 items-end">
                  <div className="w-24">
                    <Combobox
                      form={form}
                      name="title"
                      label="Title"
                      items={salutationOptions(salutations?.data) || []}
                    />
                  </div>

                  <div className="flex-1">
                    <FloatingLabelFormInput
                      form={form}
                      name="firstName"
                      label="First Name"
                    />
                  </div>
                </div>

                <FloatingLabelFormInput
                  form={form}
                  name="middleName"
                  label="Middle Name"
                />

                <FloatingLabelFormInput
                  form={form}
                  name="lastName"
                  label="Last Name"
                />

                <Combobox
                  form={form}
                  items={genderOptions}
                  name="gender"
                  label="Gender"
                />

                <FloatingLabelFormInput
                  form={form}
                  name="dateOfBirth"
                  type="date"
                  label="Date of Birth"
                />

                <NepaliDatePickerField
                  form={form}
                  name="dateOfBirthNp"
                  label="Date of Birth (NP)"
                />
              </div>
            </div>
          </FormSectionCard>

          <FormSectionCard title="Contact Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* move phone + email here */}
              <div className="flex gap-3">
                <div className="w-24">
                  <FloatingLabelFormInput
                    form={form}
                    name="countryCode"
                    label="Code"
                    disabled
                  />
                </div>

                <div className="flex-1">
                  <FloatingLabelFormInput
                    form={form}
                    name="contactNumber"
                    label="Mobile Number"
                  />
                </div>
              </div>

              <FloatingLabelFormInput
                form={form}
                name="email"
                type="email"
                label="Email"
              />
            </div>
          </FormSectionCard>

          {/* Sticky Footer */}
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

            <CustomButton type="submit" disabled={updatePending} size="sm">
              {updatePending ? 'Saving...' : 'Save & Continue'}
            </CustomButton>
          </div>
        </form>
      </Form>
    </main>
  );
};

export default ProfileinfoSeparate;
