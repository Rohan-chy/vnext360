'use client';

import { useFieldArray } from 'react-hook-form';
import { emptyExperience } from '../../domain/doctorFormDefaults';
import ExperienceView from '../components/ExperienceView';
import {
  DoctorExperienceFormValues,
  SaveExperiencesPayload,
} from '../../domain/schema/DoctorExperience.schema';
import { useDoctorExperienceForm } from '../../domain/form/useDoctorExperienceForm';
import { useAddUpdateExperience } from '../../application/usecases/useAddUpdateExperience';
import { useUpdateDoctorVerificationUpload } from '../../application/usecases/useUpdateDoctorVerificationUpload';
import { useDeleteExperience } from '../../application/usecases/useDeleteExperience';

interface Props {
  documentTypeData: any;
  isEditing?: boolean;
  verifyDoctorData: any;
  doctorId: string;
  nextTab?: string;
  prevTab?: string;
  setActiveTab?: (tab: string) => void;
}

const ExperienceSection = ({
  documentTypeData,
  isEditing,
  doctorId,
  verifyDoctorData,
  nextTab,
  prevTab,
  setActiveTab,
}: Props) => {
  const form = useDoctorExperienceForm(verifyDoctorData);

  const { control, setValue, clearErrors, formState } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'doctorExperiences',
  });

  const empty_uuid = process.env.NEXT_PUBLIC_DEFAULT_UUID;

  const { mutateAsync: uploadDocument, isPending } =
    useUpdateDoctorVerificationUpload();

  const { mutate: saveExperiences, isPending: isSaving } =
    useAddUpdateExperience();

  const { mutateAsync: deleteExperience, isPending: isDeleting } =
    useDeleteExperience();

  const handleAdd = () => append(emptyExperience);

  const handleRemove = async (index: number) => {
    const experience = form.getValues(`doctorExperiences.${index}`);

    // If it's a newly added experience (not saved in backend)
    if (!experience?.id || experience.id === empty_uuid) {
      remove(index);
      return;
    }

    try {
      const res = await deleteExperience({ id: experience.id });

      // remove only if API succeeds
      if (res?.status) {
        remove(index);
      } else {
        console.error(res?.message);
      }
    } catch (error) {
      console.error('Failed to delete experience:', error);
    }
  };

  const handleClear = (index: number) => {
    setValue(`doctorExperiences.${index}`, emptyExperience, {
      shouldValidate: true,
    });
    clearErrors(`doctorExperiences.${index}`);
  };

  const onSubmit = (formData: DoctorExperienceFormValues) => {
    const dirtyExperiences = formState.dirtyFields.doctorExperiences;
    const hasChanges =
      dirtyExperiences && Object.keys(dirtyExperiences).length > 0;

    if (!hasChanges) {
      // No changes, just move to next tab
      if (nextTab && setActiveTab) setActiveTab(nextTab);
      return;
    }

    const payload: SaveExperiencesPayload = {
      data: formData.doctorExperiences,
    };

    saveExperiences(payload, {
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

  const handleUpload = async (
    index: number,
    file: File,
    dynamicDocumentTypeId: string
  ) => {
    if (!doctorId || !dynamicDocumentTypeId) {
      form.setError(`doctorExperiences.${index}.dynamicDocumentTypeId`, {
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

      setValue(`doctorExperiences.${index}.documentUrl`, response.imageUrl, {
        shouldValidate: true,
      });
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  return (
    <ExperienceView
      form={form}
      fields={fields}
      onAdd={handleAdd}
      onRemove={handleRemove}
      onClear={handleClear}
      onUpload={handleUpload}
      onSubmit={form.handleSubmit(onSubmit)}
      documentTypeData={documentTypeData}
      isEditing={isEditing}
      isPending={isPending}
      isSaving={isSaving}
      isDeleting={isDeleting}
      doctorId={doctorId}
      prevTab={prevTab}
      nextTab={nextTab}
      onBack={handleBack}
    />
  );
};

export default ExperienceSection;
