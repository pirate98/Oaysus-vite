import * as builderComponents from "../molecules/builderComponents";

const allowedFields = [
  "&:hover",
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

// export const extractLayoutMarginYAsPaddingFromLayout = (styles) => {
//   const paddingTop = styles?.layout?.marginTop;
//   delete styles?.layout?.marginTop;

//   const paddingBottom = styles?.layout?.marginBottom;
//   delete styles?.layout?.marginBottom;

//   return { paddingTop, paddingBottom };
// };

/**
 *
 * @param {{name: string, {...}}} moduleContent
 * @param {moduleContent[]} pageComponents
 * @param {string} blankComponentName
 * @returns {{int, int}}
 */
export const getIndexes = (
  pageComponents,
  componentName,
  blankComponentName = "blank"
) => {
  let componentIndex = undefined;
  let blankComponentIndex = undefined;

  pageComponents.forEach((component, idx) => {
    if (component.name === blankComponentName) {
      blankComponentIndex = idx;
    }

    if (component.name === componentName) {
      componentIndex = idx;
    }
  });

  return { componentIndex, blankComponentIndex };
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

// Return Incentive1_xx from Exclusive
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

export const builderComponentMaker = (componentsToAddOnInitialLoad) => {
  let componentList = [];

  componentsToAddOnInitialLoad.forEach(function (componentName, idx) {
    let _componentName = componentName;

    if (componentName.includes("-")) {
      _componentName = _componentName.split("-");
      _componentName = _componentName[0];
    }

    const numericalComponentName = numerateTheName(
      componentList,
      _componentName
    );

    const json = structuredClone(builderComponents[_componentName].json);

    const component = {
      ...json,
      name: numericalComponentName,
    };

    // Detect component names like this: `Feature-switchAlignment` to swtich image position
    if (componentName.includes("-")) {
      component.layout.imagePosition = "left";
    }

    componentList = [...componentList, component];
  });

  // console.log(componentList);
  return componentList;
};
