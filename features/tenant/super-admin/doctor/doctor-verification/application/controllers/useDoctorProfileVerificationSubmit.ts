import { DoctorProfileVerificationFormValues } from '../../domain/requestVerification.schema';
import { useDoctorProfileVerification } from '../usecases/useDoctorProfileVerification';

export const useDoctorProfileVerificationSubmit = () => {
  const { mutateAsync: doctorProfileVerifyMutation, isPending } =
    useDoctorProfileVerification();

  const handleSubmit = async (data: DoctorProfileVerificationFormValues) => {
    try {
      await doctorProfileVerifyMutation(data);
    } catch (error) {
      console.error('Verification failed:', error);
    }
  };

  return {
    handleSubmit,
    isSubmitting: isPending,
  };
};
