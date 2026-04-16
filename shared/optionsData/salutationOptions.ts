type salutation = {
  name: string;
};

export const salutationOptions = (salutations: salutation[] = []) => [
  { label: 'Select', value: '' },
  ...salutations?.map((item) => ({
    label: item.name,
    value: item.name,
  })),
];
