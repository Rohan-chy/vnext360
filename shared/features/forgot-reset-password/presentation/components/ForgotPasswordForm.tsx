'use client';

import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { FloatingLabelFormInputForClient } from '@/components/custom-components/floating-label-input-client';
import { useForgotPasswordForm } from '../../domain/forms/useForgotPasswordForm';
import { useForgotPasswordHandler } from '../hooks/useForgotPasswordHandler';
import { useRouter } from 'next/navigation';

const ForgotPasswordForm = ({ source }: any) => {
  const router = useRouter();
  const form = useForgotPasswordForm(source);
  const { onSubmit, loading } = useForgotPasswordHandler();

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-10">
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0D6641]">
          Forgot Password
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Enter your registered email / username and we'll send you a link to
          reset your password
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-5"
        >
          {source == 'organization' ? (
            <FloatingLabelFormInputForClient
              form={form}
              name="tenant"
              label="Username"
            />
          ) : null}

          <FloatingLabelFormInputForClient
            form={form}
            name="email"
            label="Email"
          />

          <CustomButton
            type="submit"
            size="sm"
            disabled={loading}
            className="w-full text-sm sm:text-base py-2 sm:py-3"
          >
            Send reset link
          </CustomButton>

          <div className="text-center">
            <button
              type="button"
              className="text-xs sm:text-sm text-gray-500 hover:underline"
              onClick={() => router.push(`/${source}/login`)}
            >
              Back to Login
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
