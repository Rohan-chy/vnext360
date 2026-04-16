'use client';

import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import {
  DoctorRegistrationFormValues,
  useDoctorRegistrationForm,
} from '../../domain/registerDoctor.schema';
import { useRegisterDoctor } from '../../application/usecases/useRegisterDoctor';
import { useLogin } from '../../application/usecases/loginUser';
import { useEffect } from 'react';
import { FloatingLabelFormInputForClient } from '@/components/custom-components/floating-label-input-client';
import { FormCheckbox } from '@/components/extended/FormCheckbox';
import { useRouter } from 'next/navigation';
import AuthLeftPanel from '@/components/shared/auth/AuthLeftPanel';
import { authLeftData } from '../../application/utils/authLeftPanelData';
import AuthPageLayout from '@/components/shared/auth/AuthPageLayout';

const DoctorRegistrationForm = () => {
  const form = useDoctorRegistrationForm();

  const router = useRouter();

  const { mutate: login } = useLogin('Doctor');
  const { mutate: register, isPending } = useRegisterDoctor();

  const email = process.env.NEXT_PUBLIC_Doctor_SYS_EMAIL;
  const password = process.env.NEXT_PUBLIC_Doctor_SYS_PASSWORD;

  // Automatically login on first render
  useEffect(() => {
    if (email && password) {
      login({ email, password });
    }
  }, [email, password, login]);

  const onSubmit = (values: DoctorRegistrationFormValues) => {
    register(values);
  };

  return (
    <AuthPageLayout leftPanelData={authLeftData}>
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-10">
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
            <FloatingLabelFormInputForClient
              form={form}
              name="fullName"
              label="Full Name"
            />

            <div className="flex gap-3">
              <div className="w-20 sm:w-24">
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
                  name="mobileNumber"
                  label="Mobile Number"
                />
              </div>
            </div>

            <FloatingLabelFormInputForClient
              form={form}
              name="password"
              type="password"
              label="Password"
              showPasswordToggle
            />

            <FormCheckbox
              form={form}
              name="receiveOffers"
              label="Send me offers and promotions. By signing up, I agree to the terms."
            />

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

export default DoctorRegistrationForm;
