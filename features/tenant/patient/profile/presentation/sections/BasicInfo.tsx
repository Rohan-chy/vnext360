'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { genderOptions } from '@/lib/genderItems';
import PatientProfileImageUpload from '../components/PatientProfileImageUpload';
import { salutationOptions } from '@/shared/optionsData/salutationOptions';
import { useGetSalutation } from '@/features/tenant/super-admin/master/salutation/application/usecases/useGetSalutation';
import { PatientProfileResponse } from '../../infrastructure/dto/patientProfile.dto';
import { FormInput } from '@/components/custom-components/form-input';
import { Combobox2 } from '@/components/custom-components/combobox2';

type BasicInfoProps = {
  mode: any;
  form: any;
  patientProfileData: PatientProfileResponse;
};

const BasicInfo = ({ mode, form, patientProfileData }: BasicInfoProps) => {
  const { data: salutations } = useGetSalutation();
  const isReadOnly = mode !== 'edit';

  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col lg:flex-row gap-2">
          <PatientProfileImageUpload
            form={form}
            name="image"
            mode={mode}
            apiImage={{
              baseAddress: patientProfileData?.baseAddress,
              path: patientProfileData?.imageUrl,
            }}
          />
          <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
            <Combobox2
              form={form}
              name="title"
              label="Title"
              // @ts-ignore
              items={salutationOptions(salutations?.data) || []}
              disabled={isReadOnly}
            />

            <FormInput
              form={form}
              name="firstName"
              label="First Name"
              disabled={isReadOnly}
            />

            <FormInput
              form={form}
              name="middleName"
              label="Middle Name"
              disabled={isReadOnly}
            />

            <FormInput
              form={form}
              name="lastName"
              label="Last Name"
              disabled={isReadOnly}
            />

            <Combobox2
              form={form}
              items={genderOptions}
              name="gender"
              label="Gender"
              disabled={isReadOnly}
            />

            <FormInput
              form={form}
              name="dateOfBirth"
              type="date"
              label="Date of Birth"
              disabled={isReadOnly}
            />
            <FormInput
              form={form}
              name="email"
              label="Email"
              disabled={isReadOnly}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicInfo;
