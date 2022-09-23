/**
 * Get only the pre-determined style related fields from the object
 * @param {Object{}} elementData
 * @returns {Object{}}
 */
export const styleFilter = (elementData) => {
  const allowedFields = [
    "color",
    "backgroundColor",
    "background",
    "backgroundSize",
    "backgroundRepeat",
    "backgroundImage",
    "backgroundPositionX",
    "backgroundPositionY",
    "borderStyle",
    "borderWidth",
    "borderColor",
    "borderRadius",
    "fontFamily",
    "fontSize",
    "fontColor",
    "fontWeight",
    "fontStyle",
    "height",
    "lineHeight",
    "paddingLeft",
    "paddingTop",
    "paddingBottom",
    "paddingRight",
    "marginTop",
    "marginBottom",
    "marginLeft",
    "marginRight",
    "textDecoration",
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
export const removeDigitsAndReturnComponentName = (name, nameSuffix = "") => {
  if (!name) return;
  const underScoreIndex = name.indexOf("_");

  let nameBase = name;
  if (underScoreIndex > 0) nameBase = name.substring(0, underScoreIndex);

  const nameUpperCased =
    nameBase[0].toUpperCase() + nameBase.substring(1, nameBase.length);

  return nameUpperCased + nameSuffix;
};

// Return Incentive1_xx from Incentive1
export const numerateTheName = (pageComponents = [{ name: "" }], name = "") => {
  const biggestNumeratorFromNames = pageComponents.reduce((prev, cur) => {
    if (!cur.name.includes(name)) return prev;
    const nameNumerator = parseInt(cur.name.split("_")[1]);
    return nameNumerator > prev ? nameNumerator : prev;
  }, 0);

  console.log({ biggestNumeratorFromNames });
  return name + "_" + (biggestNumeratorFromNames + 1);
};

export const removePx = (value) => {
  // console.log({ value });
  if (typeof value !== "string" || !value || !value.includes("px"))
    return value;
  return value.replace("px", "");
};
