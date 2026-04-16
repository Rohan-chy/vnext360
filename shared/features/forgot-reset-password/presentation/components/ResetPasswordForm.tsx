'use client';

import { Form } from '@/components/ui/form';
import { CustomButton } from '@/components/extended/extended-button';
import { FloatingLabelFormInputForClient } from '@/components/custom-components/floating-label-input-client';
import { useResetPasswordForm } from '../../domain/forms/useResetPasswordForm';
import { useResetPasswordHandler } from '../hooks/useResetPasswordHandler';
import { useHydrateResetPasswordForm } from '../../domain/forms/hydrateResetPasswordForm';

const ResetPasswordForm = () => {
  const form = useResetPasswordForm(); //default form
  useHydrateResetPasswordForm(form); // set value into form
  const { onSubmit, loading } = useResetPasswordHandler();

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-10">
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0D6641]">
          Reset Password
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Update your account password securely
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-5"
        >
          <FloatingLabelFormInputForClient
            form={form}
            type="password"
            name="password"
            label="Password"
            showPasswordToggle
          />

          <FloatingLabelFormInputForClient
            form={form}
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            showPasswordToggle
          />

          <CustomButton
            type="submit"
            size="sm"
            disabled={loading}
            className="w-full text-sm sm:text-base py-2 sm:py-3"
          >
            Reset Password
          </CustomButton>
        </form>
      </Form>
    </div>
  );
};

export default ResetPasswordForm;
