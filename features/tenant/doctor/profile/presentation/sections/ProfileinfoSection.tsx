'use client';

import { useDebouncedDateConverter } from '@/lib/useDateConverter';
import { useUploadDoctorImage } from '../../application/usecases/useUploadDoctorImage';
import { useUpdateDoctor } from '../../application/usecases/useUpdateDoctor';
import { useGetSalutation } from '@/features/tenant/super-admin/master/salutation/application/usecases/useGetSalutation';
import { useUpdateDoctorForm } from '../../domain/form/useUpdateDoctorForm';
import ProfileinfoSeparate from '../components/ProfileInfoSeparateView';

interface Props {
  doctorProfileData?: any;
  nextTab?: string;
  prevTab?: string;
  setActiveTab?: (tab: string) => void;
}

const ProfileinfoForm = ({
  doctorProfileData,
  nextTab,
  prevTab,
  setActiveTab,
}: Props) => {
  const form = useUpdateDoctorForm(doctorProfileData);
  const { watch, setValue, formState } = form;

  const { data: salutations } = useGetSalutation();
  const { mutate: updateDoctor, isPending: updatePending } = useUpdateDoctor();
  const { mutate: uploadImage } = useUploadDoctorImage();

  useDebouncedDateConverter(watch, setValue, 300);

  const onSubmit = (data: any) => {
    const dirtyFields = formState.dirtyFields;
    const hasChanges = Object.keys(dirtyFields).length > 0;

    if (!hasChanges) {
      if (nextTab && setActiveTab) setActiveTab(nextTab);
      return;
    }

    const handleNextTab = () => {
      if (nextTab && setActiveTab) setActiveTab(nextTab);
    };

    if (data.image) {
      uploadImage(
        { doctorId: data?.id, image: data?.image },
        {
          onSuccess: () => updateDoctor(data, { onSuccess: handleNextTab }),
        }
      );
    } else {
      const payload = { ...data };
      if (!dirtyFields.image) delete payload.image;

      updateDoctor(payload, { onSuccess: handleNextTab });
    }
  };

  const handleBack = () => {
    if (prevTab && setActiveTab) setActiveTab(prevTab);
  };

  return (
    <ProfileinfoSeparate
      form={form}
      onSubmit={onSubmit}
      doctorProfileData={doctorProfileData}
      salutations={salutations}
      updatePending={updatePending}
      prevTab={prevTab}
      onBack={handleBack}
    />
  );
};

export default ProfileinfoForm;
