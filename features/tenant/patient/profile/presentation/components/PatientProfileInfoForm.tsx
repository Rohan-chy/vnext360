'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import BasicInfo from '../sections/BasicInfo';
import ContactInfo from '../sections/ContactInfo';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Form } from '@/components/ui/form';
import { useUploadPatientImage } from '../../application/usecases/useUploadPatientImage';
import {
  User,
  Phone,
  MapPin,
  Info,
  ClipboardCheck,
  UserIcon,
} from 'lucide-react';
import { usePostPatientBasicInfo } from '../../application/usecases/usePostPatientBasicInfo';
import {
  PatientBasicInfoFormValues,
  patientBasicInfoSchema,
} from '../../domain/schemas/patientBasicInfo.schema';
import { usePostPatientContactAndAddressInfo } from '../../application/usecases/usePostPatientContactAndAddressInfo';
import AddressInfo from '../sections/AddressInfo';
import AdditionalInfo from '../sections/AdditionalInfo';
import {
  PatientAdditionalInfoFormValues,
  patientAdditionalInfoSchema,
} from '../../domain/schemas/patientAdditionalInfo.schema';
import { usePostPatientAdditionalInfo } from '../../application/usecases/usePostPatientAdditionalInfo';
import {
  patientContactAndAddressInfoSchema,
  PatientContactAndAdressInfoFormValues,
} from '../../domain/schemas/patientContactAndAddressInfo.schema';
import { PatientProfileImageFormValues } from '../../domain/schemas/patientProfileImage.schema';
import { usePostPatientRelatives } from '../../application/usecases/usePostPatientRelatives';
import {
  PatientRelativesFormValues,
  patientRelativesSchema,
} from '../../domain/schemas/patientRelatives.schema';
import { H4 } from '@/components/custom-components/typography/H4';

type PatientProfileInfoFormProps = {
  mode: 'view' | 'edit';
  patientProfileData: any;
};
type PatientProfileFormValues = PatientBasicInfoFormValues &
  PatientContactAndAdressInfoFormValues &
  PatientAdditionalInfoFormValues &
  PatientRelativesFormValues &
  PatientProfileImageFormValues;

const tabFields: Record<string, (keyof PatientProfileFormValues)[]> = {
  basicInfo: [
    'title',
    'firstName',
    'middleName',
    'lastName',
    'gender',
    'dateOfBirth',
    'email',
    'image',
  ],

  contactInfo: ['countryCode', 'contactNumber', 'data'],

  addressInfo: [
    'countryId',
    'stateId',
    'municipalityId',
    'districtId',
    'wardNumber',
    'addressLine',
    'pinCode',
  ],

  additionalInfo: [
    'profession',
    'ethnicity',
    'emergencyContactNo',
    'religion',
    'bloodGroup',
  ],
};

const PatientProfileInfoForm = ({
  mode,
  patientProfileData,
}: PatientProfileInfoFormProps) => {
  const EMPTY_GUID = '00000000-0000-0000-0000-000000000000';

  const form = useForm<PatientProfileFormValues>({
    defaultValues: {
      // Basic Info
      title: '',
      firstName: '',
      middleName: '',
      lastName: '',
      gender: 0,
      dateOfBirth: '',
      email: '',

      // Image
      image: null,
      patientId: '',

      // Contact And Address Info
      countryCode: '',
      contactNumber: '',

      // Relatives
      data: [
        {
          id: EMPTY_GUID,
          title: '',
          firstName: '',
          middleName: '',
          lastName: '',
          relationship: '',
          contactNumber: '',
          countryCode: '',
        },
      ],

      countryId: '',
      stateId: '',
      municipalityId: '',
      districtId: '',
      wardNumber: 0,
      addressLine: '',
      pinCode: '',

      // Additional Info
      profession: '',
      ethnicity: '',
      emergencyContactNo: '',
      religion: '',
      bloodGroup: '',
    },
  });
  const {
    formState: { isDirty, dirtyFields },
  } = form;
  const tabs = [
    {
      label: 'Basic Info',
      value: 'basicInfo',
      icon: User,
      component: (
        <BasicInfo
          form={form}
          mode={mode}
          patientProfileData={patientProfileData}
        />
      ),
    },
    {
      label: 'Contact Info',
      value: 'contactInfo',
      icon: Phone,
      component: <ContactInfo form={form} mode={mode} />,
    },
    {
      label: 'Address',
      value: 'addressInfo',
      icon: MapPin,
      component: <AddressInfo form={form} mode={mode} />,
    },
    {
      label: 'Additional Info',
      value: 'additionalInfo',
      icon: Info,
      component: <AdditionalInfo form={form} mode={mode} />,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const isCurrentTabDirty = tabFields[activeTab]?.some(
    (field) => dirtyFields[field]
  );
  // console.log(isCurrentTabDirty)
  const { mutate: postPatientBasicInfo } = usePostPatientBasicInfo();
  const { mutate: postPatientContactAndAddressInfo } =
    usePostPatientContactAndAddressInfo();
  const { mutate: postPatientAdditionalInfo } = usePostPatientAdditionalInfo();
  const { mutate: postPatientRelatives } = usePostPatientRelatives();
  const { mutate: uploadPatientImage } = useUploadPatientImage();

  const router = useRouter();

  const replaceNullWithEmptyString = (obj: any): any => {
    if (obj === null) return '';

    if (Array.isArray(obj)) {
      return obj.map(replaceNullWithEmptyString);
    }

    if (typeof obj === 'object' && obj !== null) {
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [
          key,
          replaceNullWithEmptyString(value),
        ])
      );
    }

    return obj;
  };

  // console.log(patientProfileData);
  useEffect(() => {
    if (patientProfileData) {
      const cleanedData = replaceNullWithEmptyString(patientProfileData);

      form.reset({
        ...cleanedData,
        patientId: cleanedData.id,
        countryId: cleanedData.countryId,
        stateId: cleanedData.stateId,
        districtId: cleanedData.districtId,
        municipalityId: cleanedData.municipalityId,
        dateOfBirth: cleanedData.dateOfBirth
          ? cleanedData.dateOfBirth.split('T')[0]
          : '',
        // flatten additionalInformation
        profession: cleanedData.additionalInformation?.profession || '',
        ethnicity: cleanedData.additionalInformation?.ethnicity || '',
        emergencyContactNo:
          cleanedData.additionalInformation?.emergencyContactNo || '',
        religion: cleanedData.additionalInformation?.religion || '',
        bloodGroup: cleanedData.additionalInformation?.bloodGroup || '',
        data: cleanedData.relatives?.length
          ? cleanedData.relatives.map((r: any) => ({
              id: r.id || '00000000-0000-0000-0000-000000000000',
              title: r.title || '',
              firstName: r.firstName || '',
              middleName: r.middleName || '',
              lastName: r.lastName || '',
              relationship: r.relationship || '',
              countryCode: r.countryCode || '+977',
              contactNumber: r.contactNumber || '',
            }))
          : [
              {
                id: '00000000-0000-0000-0000-000000000000',
                title: '',
                firstName: '',
                middleName: '',
                lastName: '',
                relationship: '',
                countryCode: '+977',
                contactNumber: '',
              },
            ],
      });
    }
  }, [patientProfileData, form]);

  const submitBasicInfo = (values: PatientProfileFormValues) => {
    const parsed = patientBasicInfoSchema.parse(values);

    const payload = { ...parsed };

    if (!payload.id || payload.id === EMPTY_GUID) {
      delete payload.id;
    }
    // if (payload.imageUrl) {
    //   uploadPatientImage();
    // }
    postPatientBasicInfo(payload);
    // Upload image if selected
    if (values.image instanceof File) {
      uploadPatientImage({ patientId: values.patientId, image: values.image });
    }
  };

  const submitContactAndAddressInfo = (values: PatientProfileFormValues) => {
    const parsed = patientContactAndAddressInfoSchema.parse(values);
    postPatientContactAndAddressInfo(parsed);
    // 3. Handle relatives
    const relativesPayload = {
      data: values.data?.map((r) => ({
        id: r.id,
        title: r.title,
        firstName: r.firstName,
        middleName: r.middleName,
        lastName: r.lastName,
        relationship: r.relationship,
        contactNumber: r.contactNumber,
        countryCode: r.countryCode,
      })),
    };
    postPatientRelatives(relativesPayload);
  };
  const submitAdditionalInfo = (values: PatientProfileFormValues) => {
    const parsed = patientAdditionalInfoSchema.parse(values);
    postPatientAdditionalInfo(parsed);
  };

  const submitHandlers: Record<
    string,
    (values: PatientProfileFormValues) => void
  > = {
    basicInfo: submitBasicInfo,
    contactInfo: submitContactAndAddressInfo,
    addressInfo: submitContactAndAddressInfo,
    additionalInfo: submitAdditionalInfo,
  };

  const onSubmit = (values: PatientProfileFormValues) => {
    const isCreate = !values.id || values.id === EMPTY_GUID;

    let payload = { ...values };

    if (isCreate) {
      delete payload.id;
    }

    const handler = submitHandlers[activeTab];

    if (handler) {
      handler(values);
    }
    const currentIndex = tabs.findIndex((tab) => tab.value === activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].value);
    }
  };

  const handleCancel = () => {
    form.reset(patientProfileData); // reset form to initial data
    if (mode === 'edit') router.push('/patient/profile'); // optional navigation
  };

  return (
    <div className="relative space-y-6">
      <div className="flex items-center justify-between">
        <H4>Profile Settings</H4>

        {mode === 'view' ? (
          <div className="absolute right-6 top-6">
            <Button onClick={() => router.push('/patient/profile/edit')}>
              <ClipboardCheck className="h-4 w-4" />
              Complete Profile
            </Button>
          </div>
        ) : (
          <div className="absolute right-6 top-6">
            <Button onClick={() => router.push('/patient/profile')}>
              <UserIcon className="h-4 w-4" />
              View Profile
            </Button>
          </div>
        )}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="bg-transparent rounded-xl p-1 gap-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;

                return (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex items-center gap-2 p-4 rounded-full transition-all
                data-[state=active]:shadow-[0_4px_14px_rgba(0,153,102,0.5)]
                data-[state=active]:bg-primary
                data-[state=active]:text-white"
                  >
                    <Icon size={16} />
                    {tab.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {tabs.map((tab) => {
              const isLastTab = activeTab === tabs[tabs.length - 1].value;
              return (
                <TabsContent key={tab.value} value={tab.value} className="pt-6">
                  {tab.component}

                  {mode === 'edit' && (
                    <div className="flex items-center justify-end gap-2 p-2">
                      <Button disabled={!isCurrentTabDirty} type="submit">
                        {isLastTab ? 'Submit' : 'Save & Continue'}
                      </Button>
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={handleCancel}
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </TabsContent>
              );
            })}
          </Tabs>
        </form>
      </Form>
    </div>
  );
};

export default PatientProfileInfoForm;
