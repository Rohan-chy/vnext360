'use client';

import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { FloatingLabelFormInputForClient } from '@/components/custom-components/floating-label-input-client';
import { useRouter } from 'next/navigation';
import { authLeftData } from '../../application/utils/authLeftPanelData';
import { useOrganizationRegistrationForm } from '../../domain/useOrganizationRegistrationForm';
import { OrganizationRegistrationFormValues } from '../../domain/registerOrganizationAdditionalInfo.schema';
import { useRegisterOrganizationAdditionalInfo } from '../../application/usecases/useRegisterDoctorAdditionalInfo';
import AuthPageLayout from '@/shared/components/auth/AuthPageLayout';

const RegisterOrganizationAdditionalForm = () => {
  const form = useOrganizationRegistrationForm();

  const router = useRouter();

  const { mutate: register, isPending } =
    useRegisterOrganizationAdditionalInfo();

  const onSubmit = (values: OrganizationRegistrationFormValues) => {
    register(values);
  };

  return (
    <AuthPageLayout leftPanelData={authLeftData}>
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-10">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0D6641]">
            Register as Organization
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
            <div className="space-y-4">
              <FloatingLabelFormInputForClient
                form={form}
                name="companyName"
                label="Organization Name"
              />
              <FloatingLabelFormInputForClient
                form={form}
                name="address"
                label="Address"
              />

              <FloatingLabelFormInputForClient
                form={form}
                type="email"
                name="email"
                label="Email"
              />

              <FloatingLabelFormInputForClient
                form={form}
                name="phoneNumber"
                label="Contact Number"
              />

              <FloatingLabelFormInputForClient
                form={form}
                name="name"
                label="Username"
              />

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
              {isPending ? 'Registering Account...' : 'Register Account'}
            </CustomButton>

            <p className="text-center text-sm text-gray-500 pt-4">
              Already have an account?{' '}
              <span
                onClick={() => router.push('/organization/login')}
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

export default RegisterOrganizationAdditionalForm;
