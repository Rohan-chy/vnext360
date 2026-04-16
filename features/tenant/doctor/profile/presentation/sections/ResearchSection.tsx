'use client';

import { useFieldArray } from 'react-hook-form';
import { emptyResearch } from '../../domain/doctorFormDefaults';
import ResearchView from '../components/ResearchView';
import {
  DoctorResearchFormValues,
  SaveResearchPayload,
} from '../../domain/schema/doctorResearch.schema';
import { useAddUpdateResearch } from '../../application/usecases/useAddUpdateResearch';
import { useDoctorResearchForm } from '../../domain/form/useDoctorResearchForm';
import { useUpdateDoctorVerificationUpload } from '../../application/usecases/useUpdateDoctorVerificationUpload';
import { useDeleteResearch } from '../../application/usecases/useDeleteResearch';

interface Props {
  verifyDoctorData: any;
  doctorId: string;
  documentTypeData: any;
  isEditing?: boolean;
  nextTab?: string;
  prevTab?: string;
  setActiveTab?: (tab: string) => void;
}

const ResearchSection = ({
  verifyDoctorData,
  doctorId,
  documentTypeData,
  isEditing,
  nextTab,
  prevTab,
  setActiveTab,
}: Props) => {
  const form = useDoctorResearchForm(verifyDoctorData);
  const {
    control,
    setValue,
    clearErrors,
    formState,
    handleSubmit,
    reset,
    setError,
  } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'doctorResearches',
  });

  const empty_uuid = process.env.NEXT_PUBLIC_DEFAULT_UUID;

  const { mutateAsync: uploadDocument, isPending } =
    useUpdateDoctorVerificationUpload();

  const { mutateAsync: saveResearches, isPending: isSaving } =
    useAddUpdateResearch();

  const { mutateAsync: deleteResearch, isPending: isDeleting } =
    useDeleteResearch();

  const handleAdd = () => append(emptyResearch);

  const handleRemove = async (index: number) => {
    const research = form.getValues(`doctorResearches.${index}`);

    if (!research?.id || research.id === empty_uuid) {
      remove(index);
      return;
    }

    try {
      const res = await deleteResearch({ id: research.id });
      if (res?.status) remove(index);
      else console.error(res?.message);
    } catch (error) {
      console.error('Failed to delete research:', error);
    }
  };

  const handleClear = (index: number) => {
    setValue(`doctorResearches.${index}`, emptyResearch, {
      shouldValidate: true,
    });
    clearErrors(`doctorResearches.${index}`);
  };

  const handleUpload = async (
    index: number,
    file: File,
    dynamicDocumentTypeId: string
  ) => {
    if (!doctorId || !dynamicDocumentTypeId) {
      setError(`doctorResearches.${index}.dynamicDocumentTypeId`, {
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

      setValue(`doctorResearches.${index}.documentUrl`, response.imageUrl, {
        shouldValidate: true,
      });
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  // SAVE only if dirty
  const onSubmit = async (formData: DoctorResearchFormValues) => {
    const dirtyResearches = formState.dirtyFields.doctorResearches;
    const hasChanges =
      dirtyResearches && Object.keys(dirtyResearches).length > 0;

    if (!hasChanges) {
      // No changes, just move to next tab
      if (nextTab && setActiveTab) setActiveTab(nextTab);
      return;
    }

    const payload: SaveResearchPayload = {
      data: formData.doctorResearches,
    };

    await saveResearches(payload);

    if (nextTab && setActiveTab) setActiveTab(nextTab);
  };

  const handleBack = () => {
    if (prevTab && setActiveTab) setActiveTab(prevTab);
  };

  return (
    <ResearchView
      form={form}
      fields={fields}
      onAdd={handleAdd}
      onRemove={handleRemove}
      onClear={handleClear}
      onUpload={handleUpload}
      onSubmit={handleSubmit(onSubmit)}
      documentTypeData={documentTypeData}
      isEditing={isEditing}
      isPending={isPending}
      isSaving={isSaving}
      isDeleting={isDeleting}
      prevTab={prevTab}
      nextTab={nextTab}
      onBack={handleBack}
    />
  );
};

export default ResearchSection;
