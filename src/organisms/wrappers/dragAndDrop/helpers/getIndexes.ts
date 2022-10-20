/**
 *
 * @param {{name: string, {...}}} moduleContent
 * @param {content[]} content
 * @returns {int}
 */
export const getIndex = (content: Record<any, any>[], id: string | number) => {
  let index = undefined;

  let counter = 0;

  for (const item of content) {
    if (item.id === id) {
      index = counter;
      return index;
    }

    counter++;
  }

  return index;
};
