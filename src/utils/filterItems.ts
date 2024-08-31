export function filterItems<T extends Record<string, any>>(
  items: T[],
  filters: Partial<T>
): T[] {
  return items.filter((item) =>
    Object.entries(filters).every(([key, value]) => {
      if (value === undefined || value === "") return true;
      const itemValue = item[key];

      if (typeof itemValue === "string") {
        const stringValue = String(value).toLowerCase();

        return itemValue.toLowerCase().startsWith(stringValue);
      }

      return false;
    })
  );
}
