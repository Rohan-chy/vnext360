//rohan
/* -------------------- CERTIFICATION -------------------- */

import { DoctorCertificationFormValues } from './schema/doctorCertification.schema';
import { DoctorExperienceFormValues } from './schema/DoctorExperience.schema';
import { DoctorNomineeFormValues } from './schema/doctorNominee.schema';
import { DoctorRelativeFormValues } from './schema/doctorRelative.schema';
import { DoctorResearchFormValues } from './schema/doctorResearch.schema';
import { DoctorTrainingFormValues } from './schema/doctorTraining.schema';
import { DoctorBankDetailsFormValues } from './schema/doctorBankDetails.schema';

const DEFAULT_UUID = process.env.NEXT_PUBLIC_DEFAULT_UUID;

export const emptyCertification: DoctorCertificationFormValues['doctorCertifications'][number] =
  {
    id: DEFAULT_UUID,
    certificationDetails: '',
    completionYear: new Date().getFullYear(),
    completedFromInstitute: '',
    dynamicDocumentTypeId: '',
    remarks: '',
    documentUrl: '',
  };

/* -------------------- EXPERIENCE -------------------- */

export const emptyExperience: NonNullable<
  DoctorExperienceFormValues['doctorExperiences']
>[number] = {
  id: DEFAULT_UUID,
  instituteName: '',
  joinDate: new Date().toISOString().split('T')[0],
  completionDate: new Date().toISOString().split('T')[0],
  remarks: '',
  dynamicDocumentTypeId: '',
  documentUrl: '',
};

/* -------------------- NOMINEE -------------------- */

export const emptyNominee: NonNullable<
  DoctorNomineeFormValues['doctorNominees']
>[number] = {
  id: DEFAULT_UUID,
  name: '',
  relationship: '',
  contactNumber: '',
};

/* -------------------- RELATIVE -------------------- */

export const emptyRelative: NonNullable<
  DoctorRelativeFormValues['doctorRelatives']
>[number] = {
  id: DEFAULT_UUID,
  name: '',
  relationship: '',
  contactNumber: '',
};

/* -------------------- RESEARCH -------------------- */

export const emptyResearch: DoctorResearchFormValues['doctorResearches'][number] =
  {
    id: DEFAULT_UUID,
    researchTitle: '',
    yearOfCompletion: new Date().getFullYear(),
    researchOutcome: '',
    remarks: '',
    dynamicDocumentTypeId: '',
    documentUrl: '',
  };

/* -------------------- TRAINING -------------------- */

export const emptyTraining: NonNullable<
  DoctorTrainingFormValues['doctorTrainings']
>[number] = {
  id: DEFAULT_UUID,
  trainingTitle: '',
  durationInMonths: 0,
  yearOfCompletion: new Date().getFullYear(),
  completedFromInstitute: '',
  remarks: '',
  dynamicDocumentTypeId: '',
  documentUrl: '',
};

/* -------------------- BANK -------------------- */

export const emptyBank: NonNullable<
  DoctorBankDetailsFormValues['doctorBankDetails']
>[number] = {
  id: DEFAULT_UUID,
  bankName: '',
  accountName: '',
  accountType: '',
  accountNumber: '',
};
