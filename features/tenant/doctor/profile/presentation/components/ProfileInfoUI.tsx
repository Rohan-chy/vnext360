//not used component (rohan)
'use client';

import { Form } from '@/components/ui/form';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { CustomButton } from '@/components/extended/extended-button';

import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { Combobox } from '@/components/custom-components/combobox';
import { NepaliDatePickerField } from '@/components/custom-components/nepali-date-picker-field';

import { genderOptions } from '@/lib/genderItems';
import Tablist from '@/components/custom-components/Tablist';
import { profileTabs } from '../../application/utils/tablistData';
import { salutationOptions } from '@/shared/optionsData/salutationOptions';
import ProfileImageUpload from '@/shared/components/ProfileImageUpload';

interface Props {
  form: any;
  onSubmit: (data: any) => void;
  doctorProfileData: any;
  salutations: any;
  updatePending: boolean;
}

const ProfileinfoUI = ({
  form,
  onSubmit,
  doctorProfileData,
  salutations,
  updatePending,
}: Props) => {
  return (
    <main>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Tabs defaultValue="basic" className="w-full">
            <Tablist tabData={profileTabs} />

            {/* BASIC */}
            <TabsContent value="basic" className="pt-6 space-y-6">
              <div className="flex flex-col lg:flex-row gap-8">
                <ProfileImageUpload
                  form={form}
                  name="image"
                  apiImage={{
                    baseAddress: doctorProfileData?.imageBaseAddress,
                    path: doctorProfileData?.imagePath,
                  }}
                />

                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 items-end gap-3">
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
            </TabsContent>

            {/* CONTACT */}
            <TabsContent value="contact" className="pt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </TabsContent>

            {/* ACCOUNT */}
            <TabsContent value="account" className="pt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FloatingLabelFormInput
                  form={form}
                  name="userName"
                  label="Username"
                />

                <FloatingLabelFormInput
                  form={form}
                  name="password"
                  type="password"
                  label="Password"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end mt-4">
            <CustomButton type="submit" disabled={updatePending} size="sm">
              Update Profile
            </CustomButton>
          </div>
        </form>
      </Form>
    </main>
  );
};

export default ProfileinfoUI;
