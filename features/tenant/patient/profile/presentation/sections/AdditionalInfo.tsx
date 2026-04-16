'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FormInput } from '@/components/custom-components/form-input';
import { Combobox2 } from '@/components/custom-components/combobox2';

type AdditionalInfoProps = {
  mode: 'edit' | 'view';
  form: any;
};

const bloodGroupOptions = [
  { label: 'A+', value: 'A+' },
  { label: 'A-', value: 'A-' },
  { label: 'B+', value: 'B+' },
  { label: 'B-', value: 'B-' },
  { label: 'AB+', value: 'AB+' },
  { label: 'AB-', value: 'AB-' },
  { label: 'O+', value: 'O+' },
  { label: 'O-', value: 'O-' },
];

const AdditionalInfo = ({ mode, form }: AdditionalInfoProps) => {
  const isReadOnly = mode !== 'edit';

  return (
    <Card className="border-none shadow-md">
      <CardHeader>
        <CardTitle>Additional Information</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Profession */}
          <FormInput
            form={form}
            name="profession"
            label="Profession"
            disabled={isReadOnly}
          />

          {/* Ethnicity */}
          <FormInput
            form={form}
            name="ethnicity"
            label="Ethnicity"
            disabled={isReadOnly}
          />

          {/* Religion */}
          <FormInput
            form={form}
            name="religion"
            label="Religion"
            disabled={isReadOnly}
          />

          {/* Emergency Contact */}
          <FormInput
            form={form}
            name="emergencyContactNo"
            label="Emergency Contact Number"
            disabled={isReadOnly}
          />

          {/* Blood Group */}
          <Combobox2
            form={form}
            name="bloodGroup"
            label="Blood Group"
            items={bloodGroupOptions}
            disabled={isReadOnly}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AdditionalInfo;
