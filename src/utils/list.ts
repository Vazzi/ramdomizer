/**
 * Function to remove empty items from list-style-image: url(
 *
 * @param {string[]} list of items
 * @returns {string[]} list with filtered items
 */
export function removeEmptyItems(list: string[]): string[] {
  return list.filter((item) => item.length !== 0);
}
