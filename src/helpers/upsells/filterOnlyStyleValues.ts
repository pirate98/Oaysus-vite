/**
 * Get only the pre-determined style related fields from the object
 * @param {Object{string:{}}} elementData
 * @returns {Object{}}
 */
export const filterOnlyStyleValues = (
  componentData: Record<any, any> | undefined
) => {
  if (!componentData) return;

  const onlyStyleFields: Record<any, any> = {};

  for (const moduleData in componentData) {
    for (const key in componentData[moduleData])
      if (allowedFields.includes(key)) {
        onlyStyleFields[moduleData] = onlyStyleFields[moduleData] || {};
        onlyStyleFields[moduleData][key] = componentData[moduleData][key];
      }
  }

  return onlyStyleFields;
};

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
