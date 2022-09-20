/**
 * Get only the pre-determined style related fields from the object
 * @param {Object{}} elementData
 * @returns {Object{}}
 */
export const styleFilter = (elementData) => {
  const allowedFields = [
    "fontFamily",
    "fontSize",
    "fontColor",
    "fontWeight",
    "lineHeight",
    "padding",
    "margin",
  ];

  const styleFields = {};

  for (const data in elementData) {
    if (allowedFields.includes(data)) styleFields[data] = elementData[data];
  }

  return styleFields;
};

/**
 *
 * @param {{name: string, {...}}} moduleContent
 * @param {moduleContent[]} pageComponents
 * @param {string} blankComponentName
 * @returns {{int, int}}
 */
export const getIndexes = (
  pageComponents,
  moduleContent,
  blankComponentName = "blank"
) => {
  const { name } = moduleContent;

  let hoveredComponentIndex = 0;
  let blankComponentIndex = undefined;

  pageComponents.forEach((moduleContent, idx) => {
    if (moduleContent.name === blankComponentName) {
      blankComponentIndex = idx;
    }

    if (moduleContent.name === name) {
      hoveredComponentIndex = idx;
    }
  });

  return { hoveredComponentIndex, blankComponentIndex };
};

// Returns Incentive from Incentive_2123
export const removeDigitsAndReturnComponentName = (
  name,
  nameSuffix = "Component"
) => {
  const underScoreIndex = name.indexOf("_");

  const nameWithoutDigits = name.substring(0, underScoreIndex);

  const nameUpperCased =
    nameWithoutDigits[0].toUpperCase() +
    nameWithoutDigits.substring(1, nameWithoutDigits.length);

  return nameUpperCased + nameSuffix;
};

export const numerateTheName = (pageComponents = [{ name: "" }], name = "") => {
  const lastNameWithGivenString = pageComponents.reduce((prev, cur) => {
    return cur.name.includes(name) ? cur.name : prev;
  }, name);

  const numIndex = lastNameWithGivenString.match(/[0-9]/i);
  console.log({ numIndex });
  return name + (numIndex + 1);
};
