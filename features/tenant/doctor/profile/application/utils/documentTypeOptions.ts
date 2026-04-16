type attribute = {
  id: string;
  name: string;
};

export const documentTypeOptions = (documents: attribute[] = []) => [
  { label: 'Select item', value: '' },
  ...documents?.map((attribute) => ({
    label: attribute.name,
    value: attribute.id,
  })),
];
