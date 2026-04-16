'use client';

import { useState } from 'react';
import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { useLogin } from '../../application/usecases/loginUser';
import { LoginFormValues, useDoctorLoginForm } from '../../domain/login.schema';
import {
  ForgotPasswordFormValues,
  useForgotPasswordForm,
} from '../../domain/forgotPassword.schema';
import { FloatingLabelFormInputForClient } from '@/components/custom-components/floating-label-input-client';
import { useRouter } from 'next/navigation';
import { authLeftData } from '../../application/utils/authLeftPanelData';
import AuthPageLayout from '@/components/shared/auth/AuthPageLayout';

const DoctorLoginForm = () => {
  const [view, setView] = useState<'login' | 'forgot'>('login');

  const router = useRouter();

  const loginForm = useDoctorLoginForm();
  const forgotForm = useForgotPasswordForm();

  const { mutate: login, isPending } = useLogin('koshi');

  const onLoginSubmit = (values: LoginFormValues) => {
    login(values);
  };

  const onForgotSubmit = (values: ForgotPasswordFormValues) => {
    console.log('Send reset link to:', values.email);
    // Call forgot password API here
    setView('login');
  };

  return (
    <AuthPageLayout leftPanelData={authLeftData}>
      <div className="w-full max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-10 transition-all duration-300">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0D6641]">
            {view === 'login' ? 'Login as Doctor' : 'Reset Password'}
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            {view === 'login'
              ? 'Login to access your dashboard'
              : 'Enter your registered email to receive OTP'}
          </p>
        </div>

        {/* LOGIN VIEW */}
        {view === 'login' && (
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
                  className="text-xs sm:text-sm font-medium text-[#0D6641] hover:underline"
                  onClick={() => setView('forgot')}
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
                  onClick={() => router.push('/doctor/register')}
                  className="text-[#0D6641] font-medium cursor-pointer hover:underline"
                >
                  Sign Up
                </span>
              </p>
            </form>
          </Form>
        )}

        {/* FORGOT PASSWORD VIEW */}
        {view === 'forgot' && (
          <Form {...forgotForm}>
            <form
              onSubmit={forgotForm.handleSubmit(onForgotSubmit)}
              className="space-y-6"
            >
              <FloatingLabelFormInputForClient
                form={forgotForm}
                name="email"
                label="Registered Email"
                type="email"
              />

              <CustomButton
                type="submit"
                className="w-full rounded-xl py-3 font-semibold bg-[#0D6641] text-white hover:bg-[#0a4f33] transition duration-300 shadow-md"
              >
                Send OTP
              </CustomButton>

              <div className="text-center">
                <button
                  type="button"
                  className="text-xs sm:text-sm text-gray-500 hover:underline"
                  onClick={() => setView('login')}
                >
                  Back to Login
                </button>
              </div>
            </form>
          </Form>
        )}
      </div>
    </AuthPageLayout>
  );
};

export default DoctorLoginForm;
