'use client';

import { useFieldArray } from 'react-hook-form';
import BankView from '../components/BankView';
import {
  DoctorBankDetailsFormValues,
  SaveBankDetailsPayload,
} from '../../domain/schema/doctorBankDetails.schema';
import { useDoctorBankDetailsForm } from '../../domain/form/useDoctorBankDetailsForm';
import { useAddUpdateBank } from '../../application/usecases/useAddUpdateBank';
import { emptyBank } from '../../domain/doctorFormDefaults';
import { useDeleteBankDetails } from '../../application/usecases/useDeleteBankDetails';

interface Props {
  verifyDoctorData: any;
  isEditing?: boolean;

  prevTab?: string;
  nextTab?: string;
  setActiveTab?: (tab: string) => void;
}

const BankSection = ({
  verifyDoctorData,
  isEditing,
  prevTab,
  nextTab,
  setActiveTab,
}: Props) => {
  const form = useDoctorBankDetailsForm(verifyDoctorData);
  const { control, setValue, clearErrors, formState } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'doctorBankDetails',
  });

  const empty_uuid = process.env.NEXT_PUBLIC_DEFAULT_UUID;

  const { mutateAsync: saveBankDetails, isPending: isSaving } =
    useAddUpdateBank();

  const { mutateAsync: deleteBankDetails, isPending: isDeleting } =
    useDeleteBankDetails();

  const handleAdd = () => append(emptyBank);

  const handleRemove = async (index: number) => {
    const bank = form.getValues(`doctorBankDetails.${index}`);

    // If it's a newly added bank (not saved in backend)
    if (!bank?.id || bank.id === empty_uuid) {
      remove(index);
      return;
    }

    try {
      const res = await deleteBankDetails({ id: bank.id });

      // remove only if API succeeds
      if (res?.status) {
        remove(index);
      } else {
        console.error(res?.message);
      }
    } catch (error) {
      console.error('Failed to delete bank:', error);
    }
  };

  const handleClear = (index: number) => {
    setValue(`doctorBankDetails.${index}`, emptyBank, {
      shouldValidate: true,
    });
    clearErrors(`doctorBankDetails.${index}`);
  };

  const onSubmit = async (formData: DoctorBankDetailsFormValues) => {
    const dirtyBanks = formState.dirtyFields.doctorBankDetails;

    const hasChanges = dirtyBanks && Object.keys(dirtyBanks).length > 0;

    if (!hasChanges) {
      if (nextTab && setActiveTab) setActiveTab(nextTab);
      return;
    }

    const payload: SaveBankDetailsPayload = {
      data: formData.doctorBankDetails,
    };

    await saveBankDetails(payload);

    if (nextTab && setActiveTab) {
      setActiveTab(nextTab);
    }
  };

  const handleBack = () => {
    if (prevTab && setActiveTab) {
      setActiveTab(prevTab);
    }
  };

  return (
    <BankView
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

export default BankSection;
