import { useRouter } from 'next/navigation';
import { useResetPassword } from '../../application/useResetPassword';
import { ResetPasswordFormValues } from '../../domain/schemas/resetPassword.schema';

export const useResetPasswordHandler = () => {
  const { mutateAsync: resetPassword, isPending: loading } = useResetPassword();
  const router = useRouter();

  const onSubmit = async (values: ResetPasswordFormValues) => {
    await resetPassword(values);
    router.push(`/${values.tenant}/login`); // navigate after success
  };

  return {
    onSubmit,
    loading,
  };
};
