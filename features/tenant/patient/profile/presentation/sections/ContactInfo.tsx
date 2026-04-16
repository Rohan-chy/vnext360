'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useFieldArray } from 'react-hook-form';
import { Plus, Trash2, BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { salutationOptions } from '@/shared/optionsData/salutationOptions';
import { useGetSalutation } from '@/features/tenant/super-admin/master/salutation/application/usecases/useGetSalutation';
import { useDeletePatientRelative } from '../../application/usecases/useDeletePatientRelative';
import { FormInput } from '@/components/custom-components/form-input';
import { Combobox2 } from '@/components/custom-components/combobox2';

type ContactInfoProps = {
  mode: 'edit' | 'view';
  form: any;
};

const countryCodeOptions = [
  { label: '+977', value: '+977' },
  { label: '+91', value: '+91' },
  { label: '+1', value: '+1' },
];

const relationshipOptions = [
  { label: 'Father', value: 'Father' },
  { label: 'Mother', value: 'Mother' },
  { label: 'Brother', value: 'Brother' },
  { label: 'Sister', value: 'Sister' },
  { label: 'Spouse', value: 'Spouse' },
  { label: 'Other', value: 'Other' },
];

const ContactInfo = ({ mode, form }: ContactInfoProps) => {
  const isReadOnly = mode !== 'edit';
  const { control } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'data',
  });
  // console.log(form.getValues('countryCode'));
  // console.log(form.getValues('isMobileVerified'));
  const { data: salutations } = useGetSalutation();
  const { mutate: deleteRelative } = useDeletePatientRelative();

  const handleDeleteRelative = (index: number) => {
    // console.log('trigger');
    // console.log(index);
    const relative = form.getValues(`data.${index}`);
    // console.log(relative);
    if (
      relative?.id &&
      relative?.id !== '00000000-0000-0000-0000-000000000000'
    ) {
      deleteRelative(relative.id, {
        onSuccess: () => {
          remove(index);
        },
      });
    } else {
      remove(index);
    }
  };

  return (
    <Card className="border-none shadow-md">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Combobox2
            form={form}
            items={countryCodeOptions}
            name="countryCode"
            label="Code"
            disabled={isReadOnly}
          />

          <FormInput
            form={form}
            name="contactNumber"
            label="Mobile Number"
            disabled={isReadOnly}
          />
        </div>

        {/* ================= RELATIVES ================= */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-base">Relatives</h3>

            {!isReadOnly && (
              <Button
                type="button"
                size="sm"
                onClick={() =>
                  append({
                    id: '00000000-0000-0000-0000-000000000000',
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    relationship: '',
                    countryCode: '+977',
                    contactNumber: '',
                  })
                }
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Relative
              </Button>
            )}
          </div>

          {fields.map((field, index) => {
            return (
              <div key={field.id} className="border rounded-md p-4 space-y-2">
                <div
                  className={cn(
                    'grid grid-cols-1 gap-4',
                    !isReadOnly ? 'md:grid-cols-4' : 'md:grid-cols-4'
                  )}
                >
                  <div className="flex  gap-2">
                    <span className="w-24">
                      <Combobox2
                        form={form}
                        name={`data.${index}.title`}
                        label="Title"
                        // @ts-ignore
                        items={salutationOptions(salutations?.data) || []}
                        disabled={isReadOnly}
                      />
                    </span>
                    <FormInput
                      form={form}
                      name={`data.${index}.firstName`}
                      label="First Name"
                      disabled={isReadOnly}
                    />
                  </div>

                  <FormInput
                    form={form}
                    name={`data.${index}.middleName`}
                    label="Middle Name"
                    disabled={isReadOnly}
                  />

                  <FormInput
                    form={form}
                    name={`data.${index}.lastName`}
                    label="Last Name"
                    disabled={isReadOnly}
                  />
                  {!isReadOnly && (
                    <div className="flex justify-end">
                      <Button
                        type="button"
                        size="icon"
                        variant="destructive"
                        // onClick={() => remove(index)}
                        onClick={() => handleDeleteRelative(index)}
                        className="w-7 h-7"
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  )}

                  <Combobox2
                    form={form}
                    name={`data.${index}.relationship`}
                    label="Relationship"
                    items={relationshipOptions}
                    disabled={isReadOnly}
                  />

                  <Combobox2
                    form={form}
                    name={`data.${index}.countryCode`}
                    label="Code"
                    items={countryCodeOptions}
                    disabled={isReadOnly}
                  />

                  <FormInput
                    form={form}
                    name={`data.${index}.contactNumber`}
                    label="Contact Number"
                    disabled={isReadOnly}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
{
  /* {form.watch('isMobileVerified') && (
              <div className="flex items-center gap-1 text-green-600 mb-2">
                <BadgeCheck className="w-4 h-4" />
                <span className="text-sm">Verified</span>
              </div>
            )} */
}
{
  /* </div> */
}
