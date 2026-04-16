'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { Form } from '@/components/ui/form';
import {
  createDoctorSchema,
  CreateDoctorFormValues,
  genderItems,
  CreateDoctorFormProps,
} from '../../domain/createDoctor.schema';
import { useCreateDoctor } from '../../application/usecases/useCreateDoctor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Combobox } from '@/components/custom-components/combobox';
import { NepaliDatePickerField } from '@/components/custom-components/nepali-date-picker-field';
import { useDateConverter } from '../../application/services/useDateConverter';
import { useEffect } from 'react';
import { CustomButton } from '@/components/extended/extended-button';

export default function CreateDoctorForm({
  initialValues,
  onClose,
}: CreateDoctorFormProps) {
  const form = useForm<CreateDoctorFormValues>({
    resolver: zodResolver(createDoctorSchema),
    defaultValues: {
      title: '',
      firstName: '',
      middleName: '',
      lastName: '',
      gender: '',
      dateOfBirth: '',
      dateOfBirthNp: '',
      countryCode: '+977',
      contactNumber: '',
      email: '',
      userName: '',
      password: '',
    },
  });

  const { mutate, isPending: createPending } = useCreateDoctor();

  const { watch, setValue } = form;

  // Use custom hook for AD ↔ BS sync
  useDateConverter(watch, setValue);

  useEffect(() => {
    if (!initialValues) {
      form.setValue('dateOfBirth', new Date().toISOString().split('T')[0]);
    }
  }, [initialValues, form]);

  useEffect(() => {
    if (initialValues) {
      form.reset(initialValues);
    }
  }, [initialValues, form]);

  console.log(form.watch());

  const onSubmit = (values: CreateDoctorFormValues) => {
    const payload = {
      ...values,
      gender: Number(values?.gender),
    };

    mutate(payload, {
      onSuccess: () => onClose?.(),
    });
  };

  return (
    <div className="flex justify-center ">
      <div className="w-full max-w-3xl rounded-2xl border bg-background p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="personal">Personal Details</TabsTrigger>
                <TabsTrigger value="account">Account Details</TabsTrigger>
              </TabsList>

              {/* PERSONAL INFO TAB */}
              <TabsContent value="personal" className="space-y-6 pt-4">
                <section className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
                    <div className="col-span-full">
                      <FloatingLabelFormInput
                        form={form}
                        name="title"
                        label="Mr./Ms."
                      />
                    </div>
                    <FloatingLabelFormInput
                      form={form}
                      name="firstName"
                      label="First Name"
                    />
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
                      name="gender"
                      label="Gender"
                      items={genderItems || []}
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

                    <FloatingLabelFormInput
                      form={form}
                      name="countryCode"
                      label="Code"
                      className="w-1/4"
                    />
                    <FloatingLabelFormInput
                      form={form}
                      name="contactNumber"
                      label="Contact Number"
                      className="w-3/4"
                    />
                  </div>
                </section>
              </TabsContent>

              {/* ACCOUNT INFO TAB */}
              <TabsContent value="account" className="space-y-6 pt-4">
                <section className="space-y-4">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Account Details
                  </h3>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FloatingLabelFormInput
                      form={form}
                      name="email"
                      label="Email"
                    />
                    <FloatingLabelFormInput
                      form={form}
                      name="userName"
                      label="Username"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FloatingLabelFormInput
                      form={form}
                      name="password"
                      type="password"
                      label="Password"
                    />
                    <FloatingLabelFormInput
                      form={form}
                      name="confirmPassword"
                      type="password"
                      label="Confirm Password"
                    />
                  </div>
                </section>
              </TabsContent>
            </Tabs>

            <div className="flex justify-end gap-2">
              {/* SUBMIT BUTTON */}
              <CustomButton
                type="submit"
                disabled={createPending}
                size={'sm'}
                className=""
              >
                {initialValues ? 'Update' : 'Add'}
              </CustomButton>
              {/* CLEAR BUTTON */}
              <CustomButton
                type="button"
                variant={'destructive'}
                disabled={createPending}
                size={'sm'}
                className=""
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
}
