//rohan
export const ensureAtLeastOne = <T>(
  data: T[] | undefined,
  emptyItem: T
): T[] => {
  if (!data || data.length === 0) {
    return [emptyItem];
  }
  return data;
};
