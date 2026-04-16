'use client';

import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { useLoginAdditionalInfo } from '../../application/usecases/useLoginAdditionalInfo';
import {
  LoginFormValues,
  useOrganizationAdditionalLoginForm,
} from '../../domain/login.schema';
import { FloatingLabelFormInputForClient } from '@/components/custom-components/floating-label-input-client';
import { useRouter } from 'next/navigation';
import { authLeftData } from '../../application/utils/authLeftPanelData';
import AuthPageLayout from '@/shared/components/auth/AuthPageLayout';

const LoginOrganizationAdditionalForm = () => {
  const router = useRouter();

  const loginForm = useOrganizationAdditionalLoginForm();

  const organizationName = loginForm.watch('tenant'); //tenant

  const { mutate: login, isPending } = useLoginAdditionalInfo(organizationName);

  const onLoginSubmit = (values: LoginFormValues) => {
    login(values);
  };

  return (
    <AuthPageLayout leftPanelData={authLeftData}>
      <div className="w-full max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-10 transition-all duration-300">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary">
            Login as Organization
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
              name="tenant"
              label="Username"
            />

            <FloatingLabelFormInputForClient
              form={loginForm}
              name="email"
              label="Email"
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
                className="text-xs sm:text-sm font-medium text-[#0D6641] hover:underline"
                onClick={() => router.push('/organization/forgotPassword')}
              >
                Forgot Password?
              </button>
            </div>

            <CustomButton
              type="submit"
              className="w-full rounded-xl py-3 font-semibold bg-[#0D6641] text-white hover:bg-[#0a4f33] transition duration-300 shadow-md"
              disabled={isPending}
            >
              {isPending ? 'Logging in...' : 'Login'}
            </CustomButton>

            <p className="text-center text-xs sm:text-sm text-gray-500 pt-2">
              Don’t have an account?{' '}
              <span
                onClick={() => router.push('/organization/register')}
                className="text-[#0D6641] font-medium cursor-pointer hover:underline"
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

export default LoginOrganizationAdditionalForm;
