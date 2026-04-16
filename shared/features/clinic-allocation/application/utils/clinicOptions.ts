type Clinic = {
  id: string;
  name: string;
};

export const convertClinicsToItems = (clinics: Clinic[] = []) => [
  { label: 'Select item', value: '' },
  ...clinics.map((clinic) => ({
    label: clinic.name,
    value: clinic.id,
  })),
];
