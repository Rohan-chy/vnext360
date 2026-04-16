type address = {
  id: string;
  name: string;
};

export const addressOptions = (addresss: address[] = []) => [
  { label: 'Select', value: '' },
  ...addresss?.map((item) => ({
    label: item.name,
    value: item.id,
  })),
];
