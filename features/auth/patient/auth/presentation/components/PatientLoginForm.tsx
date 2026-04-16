'use client';

import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import {
  PhoneLoginFormValues,
  usePhoneLoginForm,
} from '../../domain/login.schema';
import { FloatingLabelFormInputForClient } from '@/components/custom-components/floating-label-input-client';
import { useRouter } from 'next/navigation';
import { authLeftData } from '../../application/utils/authLeftPanelData';
import { useLoginWithPhone } from '../../application/usecases/loginWithPhone';
import AuthPageLayout from '@/shared/components/auth/AuthPageLayout';

const PatientLoginForm = () => {
  const router = useRouter();

  const loginForm = usePhoneLoginForm();

  const { mutate: login, isPending } = useLoginWithPhone('Patient');

  const onLoginSubmit = (values: PhoneLoginFormValues) => {
    login(values);
  };

  return (
    <AuthPageLayout leftPanelData={authLeftData}>
      <div className="w-full max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-10 transition-all duration-300">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary">
            Login as Patient
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Login to access your dashboard
          </p>
        </div>

        <Form {...loginForm}>
          <form
            onSubmit={loginForm.handleSubmit(onLoginSubmit)}
            className="space-y-5 sm:space-y-6"
          >
            <FloatingLabelFormInputForClient
              form={loginForm}
              name="phone"
              label="Phone Number"
            />

            <FloatingLabelFormInputForClient
              form={loginForm}
              name="password"
              type="password"
              label="Password"
              showPasswordToggle
            />

            <div className="text-right">
              <button
                type="button"
                className="text-xs sm:text-sm font-medium text-primary hover:underline"
                onClick={() => router.push('/patient/forgotPassword')}
              >
                Forgot Password?
              </button>
            </div>

            <CustomButton
              type="submit"
              className="w-full rounded-xl py-3 font-semibold bg-primary text-white hover:bg-[#0a4f33] transition duration-300 shadow-md"
              disabled={isPending}
            >
              {isPending ? 'Logging in...' : 'Login'}
            </CustomButton>

            <p className="text-center text-xs sm:text-sm text-gray-500 pt-2">
              Don’t have an account?{' '}
              <span
                onClick={() => router.push('/patient/register')}
                className="text-primary font-medium cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </p>
          </form>
        </Form>
      </div>
    </AuthPageLayout>
  );
};

export default PatientLoginForm;
