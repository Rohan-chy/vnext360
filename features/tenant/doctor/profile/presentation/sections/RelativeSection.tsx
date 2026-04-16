'use client';

import { useFieldArray } from 'react-hook-form';
import { emptyRelative } from '../../domain/doctorFormDefaults';
import RelativeView from '../components/RelativeView';
import { useAddUpdateRelative } from '../../application/usecases/useAddUpdateRelative';
import {
  DoctorRelativeFormValues,
  SaveRelativesPayload,
} from '../../domain/schema/doctorRelative.schema';
import { useDoctorRelativeForm } from '../../domain/form/useDoctorRelativeForm';
import { useDeleteRelative } from '../../application/usecases/useDeleteRelative';

interface Props {
  verifyDoctorData: any;
  isEditing?: boolean;
  prevTab?: string;
  nextTab?: string;
  setActiveTab?: (tab: string) => void;
}

const RelativeSection = ({
  verifyDoctorData,
  isEditing,
  prevTab,
  nextTab,
  setActiveTab,
}: Props) => {
  const form = useDoctorRelativeForm(verifyDoctorData);
  const { control, setValue, clearErrors, reset, handleSubmit, formState } =
    form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'doctorRelatives',
  });

  const empty_uuid = process.env.NEXT_PUBLIC_DEFAULT_UUID;

  const { mutateAsync: saveRelatives, isPending: isSaving } =
    useAddUpdateRelative();

  const { mutateAsync: deleteRelative, isPending: isDeleting } =
    useDeleteRelative();

  const handleAdd = () => append(emptyRelative);

  const handleRemove = async (index: number) => {
    const relative = form.getValues(`doctorRelatives.${index}`);

    if (!relative?.id || relative.id === empty_uuid) {
      remove(index);
      return;
    }

    try {
      const res = await deleteRelative({ id: relative.id });
      if (res?.status) remove(index);
      else console.error(res?.message);
    } catch (error) {
      console.error('Failed to delete relative:', error);
    }
  };

  const handleClear = (index: number) => {
    setValue(`doctorRelatives.${index}`, emptyRelative, {
      shouldValidate: true,
    });
    clearErrors(`doctorRelatives.${index}`);
  };

  // Only save if fields are dirty
  const onSubmit = async (formData: DoctorRelativeFormValues) => {
    const dirtyRelatives = formState.dirtyFields.doctorRelatives;
    const hasChanges = dirtyRelatives && Object.keys(dirtyRelatives).length > 0;

    if (!hasChanges) {
      if (nextTab && setActiveTab) setActiveTab(nextTab);
      return;
    }

    const payload: SaveRelativesPayload = {
      data: formData.doctorRelatives,
    };

    await saveRelatives(payload);

    if (nextTab && setActiveTab) setActiveTab(nextTab);
  };

  const handleBack = () => {
    if (prevTab && setActiveTab) setActiveTab(prevTab);
  };

  return (
    <RelativeView
      form={form}
      fields={fields}
      onAdd={handleAdd}
      onRemove={handleRemove}
      onClear={handleClear}
      onSubmit={form.handleSubmit(onSubmit)}
      isEditing={isEditing}
      isSaving={isSaving}
      isDeleting={isDeleting}
      prevTab={prevTab}
      nextTab={nextTab}
      onBack={handleBack}
    />
  );
};

export default RelativeSection;
