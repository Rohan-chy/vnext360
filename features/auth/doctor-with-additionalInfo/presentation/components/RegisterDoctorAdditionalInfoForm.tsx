'use client';

import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { useLoginAdditionalInfo } from '../../application/usecases/useLoginAdditionalInfo';
import { useEffect } from 'react';
import { FloatingLabelFormInputForClient } from '@/components/custom-components/floating-label-input-client';
import { useRouter } from 'next/navigation';
import { authLeftData } from '../../application/utils/authLeftPanelData';
import {
  DoctorRegistrationAdditionalFormValues,
  RegisterAdditionalInfoPayload,
  useDoctorRegistrationAdditionalInfoForm,
} from '../../domain/registerDoctorAdditionalInfo.schema';
import { useRegisterDoctorAdditionalInfo } from '../../application/usecases/useRegisterDoctorAdditionalInfo';
import { ComboboxClient } from '@/components/custom-components/combobox-client';
import AuthPageLayout from '@/shared/components/auth/AuthPageLayout';
import { useGetSalutation } from '@/features/tenant/super-admin/master/salutation/application/usecases/useGetSalutation';
import { salutationOptions } from '@/shared/optionsData/salutationOptions';
import { genderItems } from '@/lib/genderItems';

const DoctorRegistrationAdditionalForm = () => {
  const form = useDoctorRegistrationAdditionalInfoForm();

  const router = useRouter();

  const { mutate: login } = useLoginAdditionalInfo('Doctor', 'local');
  const { mutate: register, isPending } = useRegisterDoctorAdditionalInfo();

  const email = process.env.NEXT_PUBLIC_DOCTOR_SYS_EMAIL;
  const password = process.env.NEXT_PUBLIC_DOCTOR_SYS_PASSWORD;

  const { data: salutations } = useGetSalutation();

  // Automatically login on first render
  useEffect(() => {
    if (!email || !password) return;

    const tenant = localStorage.getItem('tenant');

    // Only auto-login if tenant is NOT already Patient
    if (tenant !== 'Doctor' && email && password) {
      login({ email, password });
    }
  }, [email, password, login]);

  const onSubmit = (values: DoctorRegistrationAdditionalFormValues) => {
    const payload: RegisterAdditionalInfoPayload = {
      ...values,
      gender: values.gender === '' ? null : Number(values.gender),
    };
    register(payload);
  };

  return (
    <AuthPageLayout leftPanelData={authLeftData}>
      <div className="w-full max-w-md  bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-10">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0D6641]">
            Register as Doctor
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Please fill in your details to continue
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 sm:space-y-6"
          >
            <div className="grid grid-cols-1 gap-4">
              <div className="flex gap-3">
                <div className="w-20 sm:w-26">
                  <ComboboxClient
                    items={salutationOptions(salutations?.data) || []}
                    form={form}
                    name="title"
                    label="Salutation"
                  />
                </div>

                <div className="flex-1">
                  <FloatingLabelFormInputForClient
                    form={form}
                    name="firstName"
                    label="First Name"
                  />
                </div>
              </div>
              <FloatingLabelFormInputForClient
                form={form}
                name="middleName"
                label="Middle Name"
              />
              <FloatingLabelFormInputForClient
                form={form}
                name="lastName"
                label="Last Name"
              />
              <ComboboxClient
                items={genderItems || []}
                form={form}
                name="gender"
                label="Gender"
              />

              <div className="flex gap-3">
                <div className="w-20 sm:w-26">
                  <FloatingLabelFormInputForClient
                    form={form}
                    name="countryCode"
                    label="Code"
                    disabled
                  />
                </div>

                <div className="flex-1">
                  <FloatingLabelFormInputForClient
                    form={form}
                    name="contactNumber"
                    label="Mobile Number"
                  />
                </div>
              </div>

              <FloatingLabelFormInputForClient
                form={form}
                type="email"
                name="email"
                label="Email"
              />

              <div className="flex-1">
                <FloatingLabelFormInputForClient
                  form={form}
                  name="userName"
                  label="Username"
                />
              </div>

              <FloatingLabelFormInputForClient
                form={form}
                name="password"
                type="password"
                label="Password"
                showPasswordToggle
              />
            </div>

            <CustomButton
              type="submit"
              className="w-full rounded-xl bg-[#0D6641] py-3 text-white font-semibold hover:bg-[#0a4f33] transition duration-300"
              disabled={isPending}
            >
              {isPending ? 'Creating Account...' : 'Create Account'}
            </CustomButton>

            <p className="text-center text-sm text-gray-500 pt-4">
              Already have an account?{' '}
              <span
                onClick={() => router.push('/doctor/login')}
                className="text-[#0D6641] font-medium cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          </form>
        </Form>
      </div>
    </AuthPageLayout>
  );
};

export default DoctorRegistrationAdditionalForm;
