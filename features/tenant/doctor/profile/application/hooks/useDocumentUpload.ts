import { UseFormReturn } from 'react-hook-form';
import { useUpdateDoctorVerificationUpload } from '../usecases/useUpdateDoctorVerificationUpload';

interface UseUploadDocumentProps {
  doctorId: string;
  form: UseFormReturn<any>;
}

export const useUploadDocument = ({
  doctorId,
  form,
}: UseUploadDocumentProps) => {
  const { mutateAsync: uploadDocument, isPending } =
    useUpdateDoctorVerificationUpload();

  const handleUpload = async (
    fieldPath: string,
    index: number,
    file: File,
    dynamicDocumentTypeId?: string
  ) => {
    if (!doctorId || !dynamicDocumentTypeId) {
      form.setError(`${fieldPath}.${index}.dynamicDocumentTypeId`, {
        message: 'Select document type first',
      });
      return;
    }

    try {
      const response = await uploadDocument({
        doctorId,
        dynamicDocumentTypeId,
        image: file,
      });

      form.setValue(`${fieldPath}.${index}.documentUrl`, response.imageUrl, {
        shouldValidate: true,
      });
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  return { handleUpload, isUploading: isPending };
};
