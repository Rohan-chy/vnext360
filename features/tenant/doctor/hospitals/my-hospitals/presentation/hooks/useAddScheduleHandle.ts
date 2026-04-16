import { useRouter } from 'next/navigation';
import { useAddSchedule } from '../../application/useAddSchedule';

export const useAddScheduleHandle = (onClose?: () => void) => {
  const { mutateAsync: addSchedule, isPending } = useAddSchedule();
  const router = useRouter();

  const onSubmit = async (values: any) => {
    try {
      await addSchedule(values);
      router.push(`/doctor/hospitals/${values?.clinicId}/schedules`);
      onClose?.();
    } catch (error) {
      console.error('Failed to add schedule:', error);
    }
  };

  return {
    onSubmit,
    loading: isPending,
  };
};
