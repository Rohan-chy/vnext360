import { authLeftData } from '@/features/auth/organization-wtih-additionalInfo/application/utils/authLeftPanelData';
import AuthPageLayout from '@/shared/components/auth/AuthPageLayout';
import ResetPasswordForm from '@/shared/features/forgot-reset-password/presentation/components/ResetPasswordForm';

const page = () => {
  return (
    <AuthPageLayout leftPanelData={authLeftData}>
      <ResetPasswordForm />
    </AuthPageLayout>
  );
};

export default page;
