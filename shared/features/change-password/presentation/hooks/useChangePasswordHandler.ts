import { useChangePassword } from '../../application/useChangePassword';
import { ChangePasswordFormValues } from '../../domain/changePassword.schema';

export const useChangePasswordHandler = (loginUrl: string) => {
  const { mutateAsync: changePassword, isPending: loading } =
    useChangePassword(loginUrl);

  const onSubmit = (values: ChangePasswordFormValues) => {
    changePassword(values);
  };

  return {
    onSubmit,
    loading,
  };
};
