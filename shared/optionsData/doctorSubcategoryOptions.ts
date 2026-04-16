type subcategory = {
  id: string;
  subCategoryName: string;
};

export const doctorSubcategoryOptions = (subcategories: subcategory[] = []) => [
  { label: 'Select item', value: '' },
  ...subcategories?.map((subcategory) => ({
    label: subcategory.subCategoryName,
    value: subcategory.id,
  })),
];

export const doctorSubcategoryWithNameOptions = (
  subcategories: subcategory[] = []
) => [
  { label: 'Select item', value: '' },
  ...subcategories?.map((subcategory) => ({
    label: subcategory.subCategoryName,
    value: subcategory.subCategoryName,
  })),
];
