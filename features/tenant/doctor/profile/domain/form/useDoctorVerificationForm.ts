'use client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { DoctorVerificationFormValues } from '../schema/doctorVerification.schema';
import {
  emptyBank,
  emptyCertification,
  emptyExperience,
  emptyNominee,
  emptyRelative,
  emptyResearch,
  emptyTraining,
} from '../doctorFormDefaults';

export const useDoctorVerificationForm = (
  verifyDoctorData?: DoctorVerificationFormValues
) => {
  const form = useForm<DoctorVerificationFormValues>({
    defaultValues: {
      doctorVerification: {
        id: '',
        doctorId: '',
        verificationDocument: '',
        verificationDate: '',
        doctorCategoryId: '',
        doctorSubCategoryId: '',
        councilRegistrationNumber: '',
        briefBio: '',
        isVerified: false,
      },

      // Keep one row by default
      doctorCertifications: [{ ...emptyCertification }],
      doctorExperiences: [{ ...emptyExperience }],
      doctorNominees: [{ ...emptyNominee }],
      doctorRelatives: [{ ...emptyRelative }],
      doctorResearches: [{ ...emptyResearch }],
      doctorTrainings: [{ ...emptyTraining }],
      doctorBanks: [{ ...emptyBank }],
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (verifyDoctorData) {
      const safeData: DoctorVerificationFormValues = {
        doctorVerification: {
          id: verifyDoctorData.doctorVerification?.id ?? '',
          doctorId: verifyDoctorData.doctorVerification?.doctorId || '',
          verificationDocument:
            verifyDoctorData.doctorVerification?.verificationDocument || '',
          verificationDate:
            verifyDoctorData.doctorVerification?.verificationDate || '',
          doctorCategoryId:
            verifyDoctorData.doctorVerification?.doctorCategoryId ?? '',
          doctorSubCategoryId:
            verifyDoctorData.doctorVerification?.doctorSubCategoryId ?? '',
          isVerified: verifyDoctorData.doctorVerification?.isVerified ?? false,
          briefBio: verifyDoctorData.doctorVerification?.briefBio ?? '',
          councilRegistrationNumber:
            verifyDoctorData.doctorVerification?.councilRegistrationNumber ??
            '',
        },
        doctorCertifications: verifyDoctorData.doctorCertifications?.length
          ? verifyDoctorData.doctorCertifications
          : [{ ...emptyCertification }],

        doctorExperiences: verifyDoctorData.doctorExperiences?.length
          ? verifyDoctorData.doctorExperiences
          : [{ ...emptyExperience }],

        doctorNominees: verifyDoctorData.doctorNominees?.length
          ? verifyDoctorData.doctorNominees
          : [{ ...emptyNominee }],

        doctorRelatives: verifyDoctorData.doctorRelatives?.length
          ? verifyDoctorData.doctorRelatives
          : [{ ...emptyRelative }],

        doctorResearches: verifyDoctorData.doctorResearches?.length
          ? verifyDoctorData.doctorResearches
          : [{ ...emptyResearch }],

        doctorTrainings: verifyDoctorData.doctorTrainings?.length
          ? verifyDoctorData.doctorTrainings
          : [{ ...emptyTraining }],

        doctorBanks: verifyDoctorData.doctorBanks?.length
          ? verifyDoctorData.doctorBanks
          : [{ ...emptyBank }],
      };

      form.reset(safeData);
    }
  }, [verifyDoctorData, form]);

  return form;
};
