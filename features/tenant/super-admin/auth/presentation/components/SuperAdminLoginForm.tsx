'use client';

import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { useLogin } from '../../application/usecases/loginUser';
import { LoginFormValues, useAdminLoginForm } from '../../domain/login.schema';
import { FloatingLabelFormInputForClient } from '@/components/custom-components/floating-label-input-client';
// import AuthPageLayout from '@/components/shared/auth/AuthPageLayout';
import { authLeftData } from '../../application/utils/authLeftData';
import AuthPageLayout from '@/shared/components/auth/AuthPageLayout';

const SuperAdminLoginForm = () => {
  const loginForm = useAdminLoginForm();

  const { mutate: login, isPending } = useLogin();

  const onLoginSubmit = (values: LoginFormValues) => {
    login(values);
  };

  return (
    <AuthPageLayout leftPanelData={authLeftData}>
      <div className="w-full max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-10 transition-all duration-300">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0D6641]">
            Login as Admin
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Login to access your dashboard
          </p>
        </div>

        {/* LOGIN VIEW */}
        <Form {...loginForm}>
          <form
            onSubmit={loginForm.handleSubmit(onLoginSubmit)}
            className="space-y-5 sm:space-y-6"
          >
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

            <CustomButton
              type="submit"
              className="w-full rounded-xl py-3 font-semibold bg-[#0D6641] text-white hover:bg-[#0a4f33] transition duration-300 shadow-md"
              disabled={isPending}
            >
              {isPending ? 'Logging in...' : 'Login'}
            </CustomButton>
          </form>
        </Form>
      </div>
    </AuthPageLayout>
  );
};

export default SuperAdminLoginForm;
