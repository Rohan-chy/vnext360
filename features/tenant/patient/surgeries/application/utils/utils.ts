export const addSelectItem = (arr: any) => [
  { value: '', label: 'Select Item' },
  ...(arr ?? []),
];
