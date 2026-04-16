export const patientRegistrationDefaultValues = {
  title: '',

  firstName: '',
  middleName: '',
  lastName: '',
  fullName: '',

  gender: 0,
  dateOfBirth: undefined,
  dateOfBirthNp: undefined,

  contactNumber: '',
  email: '',
  password: '',

  countryCode: '',
  countryId: '',
  stateId: '',
  municipalityId: '',
  districtId: '',

  wardNumber: 0,
  addressLine: '',
  pinCode: '',

  userName: '',

  additionalInformation: {
    profession: '',
    ethnicity: '',
    emergencyContactNo: '',
    religion: '',
    bloodGroup: '',
  },

  relatives: [
    {
      title: '',
      firstName: '',
      middleName: '',
      lastName: '',
      relationship: '',
      countryCode: '',
      contactNumber: '',
    },
  ],
};

export const defaultValues = {
  fullName: '',
  email: '',
  password: '',
  contactNumber: '',
  countryCode: '',
};
