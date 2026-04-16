import { authLeftData } from '@/features/auth/doctor-with-additionalInfo/application/utils/authLeftPanelData';
import AuthPageLayout from '@/shared/components/auth/AuthPageLayout';
import ForgotPasswordForm from '@/shared/features/forgot-reset-password/presentation/components/ForgotPasswordForm';

const page = () => {
  return (
    <AuthPageLayout leftPanelData={authLeftData}>
      <ForgotPasswordForm source="doctor" />
    </AuthPageLayout>
  );
};

export default page;
