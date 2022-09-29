const allowedFields = [
  "color",
  "backgroundColor",
  "background",
  "backgroundSize",
  "backgroundRepeat",
  "backgroundImage",
  "backgroundPositionX",
  "backgroundPositionY",
  "border",
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
  "textAlign",
  "textDecoration",
  "width",
];

/**
 * Get only the pre-determined style related fields from the object
 * @param {Object{}} elementData
 * @returns {Object{}}
 */
export const styleFilter = (elementData) => {
  const styleFields = {};

  for (const data in elementData) {
    if (allowedFields.includes(data)) styleFields[data] = elementData[data];
  }

  return styleFields;
};

/**
 * Get only the pre-determined style related fields from the object
 * @param {Object{string:{}}} elementData
 * @returns {Object{}}
 */
export const filterOnlyStyleValues = (componentData) => {
  const onlyStyleFields = {};

  for (const moduleData in componentData) {
    for (const key in componentData[moduleData])
      if (allowedFields.includes(key)) {
        onlyStyleFields[moduleData] = onlyStyleFields[moduleData] || {};
        onlyStyleFields[moduleData][key] = componentData[moduleData][key];
      }
  }

  return onlyStyleFields;
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
  currentComponent = {},
  blankComponentName = "blank"
) => {
  const currentComponentName = currentComponent && currentComponent.name;

  let hoveredComponentIndex = undefined;
  let blankComponentIndex = undefined;

  pageComponents.forEach((component, idx) => {
    if (component.name === blankComponentName) {
      blankComponentIndex = idx;
    }

    if (component.name === currentComponentName) {
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

  // console.log({ biggestNumeratorFromNames });
  return name + "_" + (biggestNumeratorFromNames + 1);
};

export const removePx = (value) => {
  // console.log({ value });
  if (typeof value !== "string" || !value || !value.includes("px"))
    return value;
  return value.replace("px", "");
};

export const makeEditorState = (text) => `{"root":{"children":[{"children":\
[{"detail":0,"format":0,"mode":"normal","style":"","text":"${text}","type":"text","version":1}],\
"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],\
"direction":null,"format":"","indent":0,"type":"root","version":1}}`;
