import ProfileImageUpload from '@/shared/components/ProfileImageUpload';
import { useUploadDoctorCategoryImage } from '../../application/useUploadDoctorCategoryImage';
import { uploadDoctorCategoryImageForm } from '../../domain/useUploadDoctorCategoryImageForm';

const DoctorCategoryImageUpload = ({ data }: any) => {
  const form = uploadDoctorCategoryImageForm();

  const { mutateAsync: uploadDoctorCategoryImage } =
    useUploadDoctorCategoryImage();

  const handleImageChange = async (file: File) => {
    try {
      await uploadDoctorCategoryImage({
        doctorCategoryId: data?.id,
        image: file,
      });
    } catch (err) {
      console.error('Failed to upload image', err);
    }
  };

  return (
    <ProfileImageUpload
      form={form}
      name="image"
      className="w-17 h-17"
      label={data?.categoryName?.charAt(0)?.toUpperCase() || '?'}
      onChange={handleImageChange}
      apiImage={{
        baseAddress: data?.imageBaseAddress,
        path: data?.imagePath,
      }}
    />
  );
};

export default DoctorCategoryImageUpload;
