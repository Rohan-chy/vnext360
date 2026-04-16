'use client';

import { useFieldArray } from 'react-hook-form';
import { emptyTraining } from '../../domain/doctorFormDefaults';
import { useUpdateDoctorVerificationUpload } from '../../application/usecases/useUpdateDoctorVerificationUpload';
import TrainingView from '../components/TrainingView';
import { useDoctorTrainingForm } from '../../domain/form/useDoctorTrainingForm';
import {
  DoctorTrainingFormValues,
  SaveTrainingsPayload,
} from '../../domain/schema/doctorTraining.schema';
import { useAddUpdateTraining } from '../../application/usecases/useAddUpdateTraining';
import { useDeleteTraining } from '../../application/usecases/useDeleteTraining';

interface Props {
  verifyDoctorData: any;
  doctorId: string;
  documentTypeData: any;
  isEditing?: boolean;
  nextTab?: string;
  prevTab?: string;
  setActiveTab?: (tab: string) => void;
}

const TrainingSection = ({
  verifyDoctorData,
  doctorId,
  documentTypeData,
  isEditing,
  nextTab,
  prevTab,
  setActiveTab,
}: Props) => {
  const form = useDoctorTrainingForm(verifyDoctorData);

  const { control, setValue, clearErrors, setError, handleSubmit, formState } =
    form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'doctorTrainings',
  });

  const empty_uuid = process.env.NEXT_PUBLIC_DEFAULT_UUID;

  const { mutateAsync: uploadDocument, isPending } =
    useUpdateDoctorVerificationUpload();

  const { mutate: saveTrainings, isPending: isSaving } = useAddUpdateTraining();

  const { mutateAsync: deleteTraining, isPending: isDeleting } =
    useDeleteTraining();

  const handleAdd = () => append(emptyTraining);

  const handleRemove = async (index: number) => {
    const training = form.getValues(`doctorTrainings.${index}`);

    // If it's a newly added training (not saved in backend)
    if (!training?.id || training.id === empty_uuid) {
      remove(index);
      return;
    }

    try {
      const res = await deleteTraining({ id: training.id });

      // remove only if API succeeds
      if (res?.status) {
        remove(index);
      } else {
        console.error(res?.message);
      }
    } catch (error) {
      console.error('Failed to delete training:', error);
    }
  };

  const handleClear = (index: number) => {
    setValue(`doctorTrainings.${index}`, emptyTraining, {
      shouldValidate: true,
    });
    clearErrors(`doctorTrainings.${index}`);
  };

  const handleUpload = async (
    index: number,
    file: File,
    dynamicDocumentTypeId: string
  ) => {
    if (!doctorId || !dynamicDocumentTypeId) {
      setError(`doctorTrainings.${index}.dynamicDocumentTypeId`, {
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

      setValue(`doctorTrainings.${index}.documentUrl`, response.imageUrl, {
        shouldValidate: true,
      });
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  // SAVE
  const onSubmit = (formData: DoctorTrainingFormValues) => {
    const dirtyTrainings = formState.dirtyFields.doctorTrainings;
    const hasChanges = dirtyTrainings && Object.keys(dirtyTrainings).length > 0;

    if (!hasChanges) {
      // no changes, just move to next tab
      if (nextTab && setActiveTab) setActiveTab(nextTab);
      return;
    }

    const payload: SaveTrainingsPayload = {
      data: formData.doctorTrainings,
    };

    saveTrainings(payload, {
      onSuccess: () => {
        if (nextTab && setActiveTab) setActiveTab(nextTab);
      },
    });
  };

  // CANCEL
  const handleBack = () => {
    if (prevTab && setActiveTab) {
      setActiveTab(prevTab);
    }
  };

  return (
    <TrainingView
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
      prevTab={prevTab}
      nextTab={nextTab}
      onBack={handleBack}
    />
  );
};

export default TrainingSection;
