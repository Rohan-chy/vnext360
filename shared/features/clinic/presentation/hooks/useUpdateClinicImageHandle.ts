import { useUploadClinicImage } from '../../application/usecases/useUploadClinicImage';

type UseUpdateClinicImageProps = {
  profile?: Record<string, any> | null;
};

export const useUpdateClinicImageHandle = ({
  profile,
}: UseUpdateClinicImageProps) => {
  const { mutateAsync: uploadImage } = useUploadClinicImage();

  const handleImageChange = async (file: File) => {
    if (!profile?.clinicId) {
      console.error('Clinic ID is missing');
      return;
    }

    try {
      await uploadImage({ clinicId: profile.clinicId, image: file });
    } catch (err) {
      console.error('Failed to upload image', err);
    }
  };

  return {
    handleImageChange,
  };
};
