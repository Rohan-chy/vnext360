'use client';

import { Form } from '@/components/ui/form';
import { FloatingLabelFormInput } from '@/components/custom-components/floating-label-form-input';
import { CustomButton } from '@/components/extended/extended-button';
import { useChangePasswordForm } from '../../domain/useChangePasswordForm';
import { useChangePasswordHandler } from '../hooks/useChangePasswordHandler';
import { FloatingLabelFormInputForClient } from '@/components/custom-components/floating-label-input-client';

const ChangePasswordForm = ({ loginUrl }: any) => {
  const form = useChangePasswordForm();
  const { onSubmit, loading } = useChangePasswordHandler(loginUrl);

  return (
    <main className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-1">
        <h2 className="text-xl font-semibold text-gray-800">Change Password</h2>
        <p className="text-sm text-gray-500">
          Update your account password securely
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-5">
            <FloatingLabelFormInputForClient
              form={form}
              type="password"
              name="password"
              label="Current Password"
              showPasswordToggle
            />

            <FloatingLabelFormInputForClient
              form={form}
              type="password"
              name="newPassword"
              label="New Password"
              showPasswordToggle
            />

            <FloatingLabelFormInputForClient
              form={form}
              type="password"
              name="confirmNewPassword"
              label="Confirm New Password"
              showPasswordToggle
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-2">
            <CustomButton
              type="button"
              variant="outline"
              size="sm"
              onClick={() => form.reset()}
            >
              Clear
            </CustomButton>

            <CustomButton
              type="submit"
              size="sm"
              disabled={!form.formState.isValid || loading}
            >
              {loading ? 'Updating...' : 'Change Password'}
            </CustomButton>
          </div>
        </form>
      </Form>
    </main>
  );
};

export default ChangePasswordForm;
