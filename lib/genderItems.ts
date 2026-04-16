export const genderItems = [
  { label: 'Select item', value: '' },
  { label: 'Male', value: '0' },
  { label: 'Female', value: '1' },
  { label: 'Other', value: '2' },
];

// Map gender enum to readable text
export const genderText = (gender: any) => {
  switch (gender) {
    case 0:
      return 'Male';
    case 1:
      return 'Female';
    case 3:
      return 'Other';
    default:
      return 'Unknown';
  }
};

export enum Gender {
  Male = 0,
  Female = 1,
  Other = 2,
}

export const genderOptions = [
  { label: 'Male', value: Gender.Male },
  { label: 'Female', value: Gender.Female },
  { label: 'Other', value: Gender.Other },
];
