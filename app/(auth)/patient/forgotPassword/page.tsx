import { authLeftData } from '@/features/auth/patient/auth/application/utils/authLeftPanelData';
import AuthPageLayout from '@/shared/components/auth/AuthPageLayout';
import ForgotPasswordForm from '@/shared/features/forgot-reset-password/presentation/components/ForgotPasswordForm';

const page = () => {
  return (
    <AuthPageLayout leftPanelData={authLeftData}>
      <ForgotPasswordForm source="patient" />
    </AuthPageLayout>
  );
};

export default page;
