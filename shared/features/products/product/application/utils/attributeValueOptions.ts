type attribute = {
  id: string;
  value: string;
};

export const attributeValueOptions = (clinics: attribute[] = []) => [
  { label: 'Select item', value: '' },
  ...clinics.map((attribute) => ({
    label: attribute.value,
    value: attribute.id,
  })),
];
