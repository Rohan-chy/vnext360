type attribute = {
  id: string;
  name: string;
};

export const optionItems = (clinics: attribute[] = []) => [
  { label: 'Select item', value: '' },
  ...clinics.map((attribute) => ({
    label: attribute.name,
    value: attribute.id,
  })),
];
