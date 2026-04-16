type Doctor = {
  id: string;
  categoryName: string;
};

export const doctorCategoryOptions = (doctors: Doctor[] = []) => [
  { label: 'Select item', value: '' },
  ...doctors?.map((category) => ({
    label: category.categoryName,
    value: category.id,
  })),
];

export const doctorCategoryWithNameOptions = (doctors: Doctor[] = []) => [
  { label: 'Select item', value: '' },
  ...doctors?.map((category) => ({
    label: category.categoryName,
    value: category.categoryName,
  })),
];
