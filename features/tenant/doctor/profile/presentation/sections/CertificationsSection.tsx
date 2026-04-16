'use client';

import { useFieldArray } from 'react-hook-form';
import { emptyCertification } from '../../domain/doctorFormDefaults';
import { useUpdateDoctorVerificationUpload } from '../../application/usecases/useUpdateDoctorVerificationUpload';
import CertificationsView from '../components/CertificationView';
import { useDoctorCertificationForm } from '../../domain/form/useDoctorCertificationForm';
import { useAddUpdateCertification } from '../../application/usecases/useAddUpdateCertification';
import {
  DoctorCertificationFormValues,
  SaveCertificationsPayload,
} from '../../domain/schema/doctorCertification.schema';
import { useDeleteCertification } from '../../application/usecases/useDeleteCertification';

interface Props {
  verifyDoctorData: any;
  doctorId: string;
  documentTypeData: any;
  isEditing?: boolean;
  nextTab?: string;
  prevTab?: string;
  setActiveTab?: (tab: string) => void;
}

const CertificationsSection = ({
  verifyDoctorData,
  doctorId,
  documentTypeData,
  isEditing,
  nextTab,
  prevTab,
  setActiveTab,
}: Props) => {
  const form = useDoctorCertificationForm(verifyDoctorData);
  const { control, setValue, clearErrors, handleSubmit, formState } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'doctorCertifications',
  });

  const empty_uuid = process.env.NEXT_PUBLIC_DEFAULT_UUID;

  const { mutateAsync: uploadDocument, isPending } =
    useUpdateDoctorVerificationUpload();

  const { mutate: saveCertifications, isPending: isSaving } =
    useAddUpdateCertification();

  const { mutateAsync: deleteCertification, isPending: isDeleting } =
    useDeleteCertification();

  const handleAdd = () => append(emptyCertification);

  const handleRemove = async (index: number) => {
    const certification = form.getValues(`doctorCertifications.${index}`);

    // If it's a newly added certification (not saved in backend)
    if (!certification?.id || certification.id === empty_uuid) {
      remove(index);
      return;
    }

    try {
      const res = await deleteCertification({ id: certification.id });

      // remove only if API succeeds
      if (res?.status) {
        remove(index);
      } else {
        console.error(res?.message);
      }
    } catch (error) {
      console.error('Failed to delete certification:', error);
    }
  };

  const handleClear = (index: number) => {
    setValue(`doctorCertifications.${index}`, emptyCertification, {
      shouldValidate: true,
    });
    clearErrors(`doctorCertifications.${index}`);
  };

  const handleUpload = async (
    index: number,
    file: File,
    dynamicDocumentTypeId: string
  ) => {
    if (!doctorId || !dynamicDocumentTypeId) {
      form.setError(`doctorCertifications.${index}.dynamicDocumentTypeId`, {
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

      setValue(`doctorCertifications.${index}.documentUrl`, response.imageUrl, {
        shouldValidate: true,
      });
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  //  SAVE
  const onSubmit = (formData: DoctorCertificationFormValues) => {
    const dirtyCertifications = formState.dirtyFields.doctorCertifications;
    const hasChanges =
      dirtyCertifications && Object.keys(dirtyCertifications).length > 0;

    if (!hasChanges) {
      // no changes, just go to next tab
      if (nextTab && setActiveTab) setActiveTab(nextTab);
      return;
    }

    const payload: SaveCertificationsPayload = {
      data: formData.doctorCertifications,
    };

    saveCertifications(payload, {
      onSuccess: () => {
        if (nextTab && setActiveTab) setActiveTab(nextTab);
      },
    });
  };

  const handleBack = () => {
    if (prevTab && setActiveTab) {
      setActiveTab(prevTab);
    }
  };

  return (
    <CertificationsView
      form={form}
      fields={fields}
      onAdd={handleAdd}
      onRemove={handleRemove}
      onClear={handleClear}
      onUpload={handleUpload}
      onSubmit={handleSubmit(onSubmit)}
      documentTypeData={documentTypeData}
      isPending={isPending}
      isSaving={isSaving}
      isEditing={isEditing}
      isDeleting={isDeleting}
      nextTab={nextTab}
      prevTab={prevTab}
      onBack={handleBack}
    />
  );
};

export default CertificationsSection;
