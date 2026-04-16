export type productCategory = {
  id?: string | null; // optional now
  name?: string | null; // optional now
  categoryId?: string | null; // optional mapping from API
  categoryName?: string | null; // optional mapping from API
  description?: string;
  isActive?: boolean;
};

export const convertProductCategoryToItems = (
  categories: productCategory[] = []
) => {
  // Start with a default "Select item" option
  const items: { label: string; value: string }[] = [
    { label: 'Select item', value: '' }, // empty value for no selection
  ];

  categories.forEach((category) => {
    // Only include valid entries
    if (category.id && category.name) {
      items.push({
        label: category.name,
        value: category.id,
      });
    }
  });

  return items;
};
