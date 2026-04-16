export const optionsConverter = <T>(
  items: T[] = [],
  getLabel: (item: T) => string,
  getValue: (item: T) => string
) => [
  { label: 'Select item', value: '' },
  ...items.map((item) => ({
    label: getLabel(item),
    value: getValue(item),
  })),
];
