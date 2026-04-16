'use client';

import { useGetDoctorCategory } from '@/shared/features/doctor-category/application/useGetDoctorCategory';
import { useGetDoctorSubcategory } from '@/shared/features/doctor-sub-category/application/useGetDoctorSubcategory';
import { doctorCategoryOptions } from '@/shared/optionsData/doctorCategoryOptions';
import { doctorSubcategoryOptions } from '@/shared/optionsData/doctorSubcategoryOptions';

import { useDoctorProfessionalForm } from '../../domain/form/useDoctorProfessionalForm';
import { useAddUpdateDoctorProfession } from '../../application/usecases/useAddDoctorProfession';
import VerificationSectionView from '../components/VerificationSectionView';

interface Props {
  doctorVerificationData?: any; // for edit mode later
  nextTab?: string;
  prevTab?: string;
  setActiveTab?: (tab: string) => void;
}

const VerificationSection = ({
  doctorVerificationData,
  nextTab,
  prevTab,
  setActiveTab,
}: Props) => {
  const form = useDoctorProfessionalForm(doctorVerificationData);
  const { formState } = form;

  const { data: category } = useGetDoctorCategory();
  const { data: subcategory } = useGetDoctorSubcategory();

  const { mutate, isPending } = useAddUpdateDoctorProfession();

  const onSubmit = (data: any) => {
    const dirtyFields = formState.dirtyFields;
    const hasChanges = Object.keys(dirtyFields).length > 0;

    if (!hasChanges) {
      // No changes made, just move to next tab if any
      if (nextTab && setActiveTab) setActiveTab(nextTab);
      return;
    }

    mutate(data, {
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
    <VerificationSectionView
      form={form}
      onSubmit={form.handleSubmit(onSubmit)}
      categoryOptions={doctorCategoryOptions(category?.data) || []}
      subcategoryOptions={doctorSubcategoryOptions(subcategory?.data) || []}
      isPending={isPending}
      prevTab={prevTab}
      onBack={handleBack}
    />
  );
};

export default VerificationSection;
