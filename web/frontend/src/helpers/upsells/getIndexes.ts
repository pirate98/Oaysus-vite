/**
 *
 * @param {{name: string, {...}}} moduleContent
 * @param {moduleContent[]} pageComponents
 * @param {string} blankComponentName
 * @returns {{int, int}}
 */
export const getIndexes = (
  pageComponents: Record<any, any>,
  componentName: string | undefined,
  blankComponentName = "blank"
) => {
  let componentIndex = undefined;
  let blankComponentIndex = undefined;

  pageComponents.forEach((component: Record<any, any>, idx: number) => {
    if (component.name === blankComponentName) {
      blankComponentIndex = idx;
    }

    if (component.name === componentName) {
      componentIndex = idx;
    }
  });

  return { componentIndex, blankComponentIndex };
};
