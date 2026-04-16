'use client';

import { useFieldArray } from 'react-hook-form';
import { emptyNominee } from '../../domain/doctorFormDefaults';
import NomineeView from '../components/NomineeView';
import { useAddUpdateNominee } from '../../application/usecases/useAddUpdateNominee';
import {
  DoctorNomineeFormValues,
  SaveNomineesPayload,
} from '../../domain/schema/doctorNominee.schema';
import { useDoctorNomineeForm } from '../../domain/form/useDoctorNomineeForm';
import { useDeleteNominee } from '../../application/usecases/useDeleteNominee';

interface Props {
  verifyDoctorData: any;
  isEditing?: boolean;

  nextTab?: string;
  prevTab?: string;
  setActiveTab?: (tab: string) => void;
}

const NomineeSection = ({
  verifyDoctorData,
  isEditing,
  nextTab,
  prevTab,
  setActiveTab,
}: Props) => {
  const form = useDoctorNomineeForm(verifyDoctorData);
  const { control, setValue, clearErrors, reset, handleSubmit, formState } =
    form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'doctorNominees',
  });

  const empty_uuid = process.env.NEXT_PUBLIC_DEFAULT_UUID;

  const { mutateAsync: saveNominees, isPending: isSaving } =
    useAddUpdateNominee();

  const { mutateAsync: deleteNominee, isPending: isDeleting } =
    useDeleteNominee();

  const handleAdd = () => append(emptyNominee);

  const handleRemove = async (index: number) => {
    const nominee = form.getValues(`doctorNominees.${index}`);

    if (!nominee?.id || nominee.id === empty_uuid) {
      remove(index);
      return;
    }

    try {
      const res = await deleteNominee({ id: nominee.id });
      if (res?.status) remove(index);
      else console.error(res?.message);
    } catch (error) {
      console.error('Failed to delete nominee:', error);
    }
  };

  const handleClear = (index: number) => {
    setValue(`doctorNominees.${index}`, emptyNominee, {
      shouldValidate: true,
    });
    clearErrors(`doctorNominees.${index}`);
  };

  // Only call API if there are dirty fields
  const onSubmit = async (formData: DoctorNomineeFormValues) => {
    const dirtyNominees = formState.dirtyFields.doctorNominees;
    const hasChanges = dirtyNominees && Object.keys(dirtyNominees).length > 0;

    if (!hasChanges) {
      if (nextTab && setActiveTab) setActiveTab(nextTab);
      return;
    }

    const payload: SaveNomineesPayload = {
      data: formData.doctorNominees,
    };

    await saveNominees(payload);

    if (nextTab && setActiveTab) setActiveTab(nextTab);
  };

  const handleBack = () => {
    if (prevTab && setActiveTab) setActiveTab(prevTab);
  };

  return (
    <NomineeView
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

export default NomineeSection;
