type Doctor = {
  id: string;
  firstName: string;
};

export const convertDoctorsToItems = (doctors: Doctor[] = []) => [
  { label: 'Select item', value: '' },
  ...doctors.map((clinic) => ({
    label: clinic.firstName,
    value: clinic.id,
  })),
];
