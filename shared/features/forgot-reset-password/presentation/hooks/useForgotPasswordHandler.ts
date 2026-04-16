import { useRouter } from 'next/navigation';
import { useForgotPassword } from '../../application/useForgotPassword';
import { ForgotPasswordFormValues } from '../../domain/schemas/forgotPassword.schema';

export const useForgotPasswordHandler = () => {
  const { mutateAsync: forgotPassword, isPending: loading } =
    useForgotPassword();
  const router = useRouter();

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    await forgotPassword(values);
    router.push(`/${values.tenant}/login`); // navigate after success
  };

  return {
    onSubmit,
    loading,
  };
};
